import React, { Component } from 'react';
import axios from 'axios';

export default class ClientesList extends Component {
    constructor(props) {
        super(props);
        this.handleclick = this.handleclick.bind(this);
        this.state = {
            responseData: null
        };
    }

    handleclick() {
        axios.get('http://localhost:8080/clientes')
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
                    Ver Clientes!
                </button>
                {this.state.responseData && (
                    <div>
                        <h2>Dados dos clientes:</h2>
                        <table style={tableStyle} className="custom-table">
                            <thead>
                                <tr>
                                    <th style={thStyle}>ID</th>
                                    <th style={thStyle}>Nome</th>
                                    <th style={thStyle}>Telefone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.responseData.map(cliente => (
                                    <tr key={cliente.id}>
                                        <td style={tdStyle}>{cliente.id}</td>
                                        <td style={tdStyle}>{cliente.nome}</td>
                                        <td style={tdStyle}>{cliente.telefone}</td>
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
