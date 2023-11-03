import React, { Component } from 'react';
import axios from 'axios';

export default class PedidosList extends Component {
    constructor(props) {
        super(props);
        this.handleclick = this.handleclick.bind(this);
        this.state = {
            responseData: null
        };
    }

    handleclick() {
        axios.get('http://localhost:8080/relatorio-produtos')
            .then((response) => {
                const data = response.data;
                if (data.erro === false) {
                    this.setState({ responseData: data.result });
                    console.log(data.result);
                } else {
                    this.setState({ responseData: [] });
                    console.error(data.mensagem);
                }
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
            });

    }

    render() {
        const tableStyle = {
            borderCollapse: 'collapse',
            width: '100%',
            textAlign: 'center'
        };

        const thStyle = {
            backgroundColor: '#ccc',
            color: '#3335',
            fontWeight: 'italic',
            width: '10%'
        };

        const tdStyle = {
            border: '1px solid #ccc',
            padding: '10px',
            textAlign: 'center'
        }

        return (
            <div>
                <button onClick={this.handleclick} className="custom-button" style={{ float: 'right' }}>
                    Ver Pedidos!
                </button>
                {this.state.responseData && (
                    <div>
                        <h2>Relação de pedidos:</h2>
                        <table style={tableStyle} className="custom-table">
                            <thead>
                                <tr>
                                    <th style={{ maxWidth: '50px', width: '50px' }}>ID</th> {/* Coluna 1 menor */}
                                    <th style={{ width: '200px' }}>Nome do cliente</th> {/* Coluna 2 maior */}
                                    <th style={{ width: '200px' }}>Descrição do pedido</th> {/* Coluna 3 do tamanho da coluna 1 */}
                                    <th style={{ width: '75px' }}>Valor do pedido R$</th> {/* Coluna 4 do tamanho da coluna 1 */}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.responseData.map(pedidos => (
                                    <tr key={pedidos.id}>
                                        <td style={tdStyle}>{pedidos.id_cliente}</td>
                                        <td style={tdStyle}>{pedidos.Nome_Cliente}</td>
                                        <td style={tdStyle}>{pedidos.Descricao_Pedidos}</td>
                                        <td style={tdStyle}>{pedidos.Valor_Total_Pedido}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        );
    }
}