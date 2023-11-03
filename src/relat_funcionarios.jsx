import React, { Component } from 'react';
import axios from 'axios';

export default class FuncionariosList extends Component {
    constructor(props) {
        super(props);
        this.handleclick = this.handleclick.bind(this);
        this.state = {
            responseData: null
        };
    }

    handleclick() {
        axios.get('http://localhost:8080/funcionario')
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
                    Ver Funcionários!
                </button>
                {this.state.responseData && (
                    <div>
                        <h2>Dados dos funcionarios:</h2>
                        <table style={tableStyle} className="custom-table">
                            <thead>
                                <tr>
                                    <th style={thStyle}>ID</th>
                                    <th style={thStyle}>Nome</th>
                                    <th style={thStyle}>Cargo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.responseData.map(funcionarios => (
                                    <tr key={funcionarios.id}>
                                        <td style={tdStyle}>{funcionarios.id}</td>
                                        <td style={tdStyle}>{funcionarios.nome_funcionario}</td>
                                        <td style={tdStyle}>{funcionarios.cargo_funcionario}</td>
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