import React, { Component } from 'react';
import axios from 'axios';

export default class CadastroClientes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            telefone: '',
            responseData: null,
            sucesso: false,
        };
    }

    handleInputChange = (e) => {
        console.log(e.target.value)
        const { value, name } = e.target;
        if (name === "nome") {
            this.setState({ nome: value });
        } else {
            this.setState({ telefone: value });
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        const data = {
            nome: this.state.nome,
            telefone: this.state.telefone
        };

        axios.post('http://localhost:8080/cadastrarclientes', data)
            .then(response => {
                console.log('Solicitação POST bem-sucedida', response.data);
                this.setState({ responseData: response.data, sucesso: true });
            })
            .catch(error => {
                console.error('Erro na solicitação POST', error);
            });
    }

    render() {
        return (
            <div className="clientes">
                {this.state.sucesso && (
                    <div className="sucesso" style={{ color: 'green', fontWeight: 'bold' }}>
                        Cliente cadastrado com sucesso!
                    </div>
                )}
                <p></p>
                <form onSubmit={this.handleFormSubmit} style={{ display: "flex", flexDirection: "row", alignItems: "left" }}>
                    <div style={{ display: "left", flexDirection: "column", alignItems: "left" }}>
                        <label htmlFor="nome" style={{ fontWeight: "bold", color: "black" }}> Nome </label>
                        <input type="text" id="nome" name="nome" onChange={this.handleInputChange}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                width: "350px",
                                height: "30px",
                                textAlign: "left",
                            }} />
                    </div>
                    <p></p>
                    <div style={{ display: "center", flexDirection: "column", alignItems: "center" }}>
                        <label htmlFor="telefone" style={{ fontWeight: "bold", color: "black" }}> Telefone </label>
                        <input type="text" id="telefone" name="telefone" onChange={this.handleInputChange}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                width: "250px",
                                height: "30px",
                                textAlign: "center",
                            }} />
                    </div>
                    <p></p>
                    <button type="submit" className="custom-button">
                        Cadastrar Cliente
                    </button>
                </form>
            </div>
        );
    }
}