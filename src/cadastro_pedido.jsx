import React, { Component } from 'react';
import axios from 'axios';

export default class CadastrarPedido extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_funcionario: '',
            id_cliente: '',
            id_produto: '',
            qtde_pedido: '',
            responseData: null,
            successMessage: '',
        };
    }

    handleInputChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        if (name === "id_funcionario") {
            this.setState({ id_funcionario: value });
        } else if (name === "id_cliente") {
            this.setState({ id_cliente: value });
        } else if (name === "id_produto") {
            this.setState({ id_produto: value });
        } else {
            this.setState({ qtde_pedido: value });
        }
    }


    handleFormSubmit = (e) => {
        e.preventDefault();

        const data = {
            id_funcionario: this.state.id_funcionario,
            id_cliente: this.state.id_cliente,
            id_produto: this.state.id_produto,
            qtde_pedido: this.state.qtde_pedido
        };

        axios.post('http://localhost:8080/cadastrarPedido', data)
            .then(response => {
                console.log('Solicitação POST bem-sucedida', response.data);
                this.setState({
                    responseData: response.data,
                    successMessage: 'Pedido cadastrado com sucesso!',
                    id_funcionario: '',
                    id_cliente: '',
                    id_produto: '',
                    qtde_pedido: ''
                });
            })
            .catch(error => {
                console.error('Erro na solicitação POST', error);
            });
    }

    render() {
        return (
            <div>
                {this.state.successMessage && (
                    <div style={{ color: 'green', fontWeight: 'bold' }}>
                        {this.state.successMessage}
                    </div>
                )}
                <p></p>
                <form onSubmit={this.handleFormSubmit} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <p></p>
                    <div style={{ display: "center", flexDirection: "column", alignItems: "center" }}>
                        <label htmlFor="id_funcionario" style={{ fontWeight: "bold", color: "black" }}>CodFuncionário </label>
                        <input
                            type="text"
                            id="id_funcionario"
                            name="id_funcionario"
                            onChange={this.handleInputChange}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                width: "120px",
                                height: "30px",
                                textAlign: "center",
                            }}
                        />
                    </div>
                    <p></p>
                    <div style={{ display: "center", flexDirection: "column", alignItems: "center" }}>
                        <label htmlFor="id_cliente" style={{ fontWeight: "bold", color: "black" }}>CodCliente </label>
                        <input
                            type="text"
                            id="id_cliente"
                            name="id_cliente"
                            onChange={this.handleInputChange}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                width: "90px",
                                height: "30px",
                                textAlign: "center",
                            }}
                        />
                    </div>
                    <p></p>
                    <div style={{ display: "center", flexDirection: "column", alignItems: "center" }}>
                        <label htmlFor="id_produto">CodProduto </label>
                        <input
                            type="text"
                            id="id_produto"
                            name="id_produto"
                            onChange={this.handleInputChange}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                width: "90px",
                                height: "30px",
                                textAlign: "center",
                            }}
                        />
                    </div>
                    <p></p>
                    <div style={{ display: "center", flexDirection: "column", alignItems: "center" }}>
                        <label htmlFor="qtde_pedido">Qtde </label>
                        <input
                            type="text"
                            id="qtde_pedido"
                            name="qtde_pedido"
                            onChange={this.handleInputChange}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                width: "50px",
                                height: "30px",
                                textAlign: "center",
                            }}
                        />
                    </div>
                    <p></p>
                    <button type="submit" className="custom-button">
                        Cadastrar Pedido
                    </button>
                </form>
            </div>
        );
    }
}