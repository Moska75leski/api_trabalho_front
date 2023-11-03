import React, { Component } from 'react';
import axios from 'axios';

export default class ProdutosList extends Component {
    constructor(props) {
        super(props);
        this.handleclick = this.handleclick.bind(this);
        this.state = {
            responseData: null
        };
    }

    handleclick() {
        axios.get('http://localhost:8080/produto')
            .then(response => {
                console.log(response.data);
                this.setState({ responseData: response.data });
            })
            .catch(error => {
                console.log('Erro na requisição');
            });

        console.log('Clicado!');
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
                    Ver Produtos!
                </button>
                {this.state.responseData && (
                    <div>
                        <h2>Dados dos produtos:</h2>
                        <table style={tableStyle} className="custom-table">
                            <thead>
                                <tr>
                                    <th style={{ maxWidth: '50px', width: '50px' }}>ID</th>
                                    <th style={{ width: '100px' }}>Nome do produto</th>
                                    <th style={{ width: '100px' }}>Valor do produto</th>
                                    <th style={{ width: '200px' }}>Descrição do Produto</th>{}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.responseData.map(produtos => (
                                    <tr key={produtos.id}>
                                        <td style={tdStyle}>{produtos.id}</td>
                                        <td style={tdStyle}>{produtos.nome_produto}</td>
                                        <td style={tdStyle}>{produtos.valor_produto}</td>
                                        <td style={tdStyle}>{produtos.descricao_produto}</td>
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