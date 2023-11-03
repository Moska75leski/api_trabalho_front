import React, { Component } from 'react';
import axios from 'axios';

export default class CadastrarProduto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome_produto: '',
            valor_produto: '',
            descricao_produto: '',
            responseData: null,
            sucesso: false,
        };
    }

    handleInputChange = (e) => {
        console.log(e.target.value)
        const { value, name } = e.target;
        if(name === "nome_produto"){
            this.setState({ nome_produto: value });  
        } else if(name === "valor_produto"){
            this.setState({ valor_produto: value });  
        } else {
            this.setState({ descricao_produto: value }); 
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        const data = {
            nome_produto: this.state.nome_produto,
            valor_produto: this.state.valor_produto,
            descricao_produto: this.state.descricao_produto
        };

        axios.post('http://localhost:8080/cadastrarproduto', data)
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
            <div className="produtos">
                {this.state.sucesso &&(
                    <div className="sucesso" style={{ color: 'green', fontWeight: 'bold' }}>
                        Produto cadastrado com sucesso!
                    </div>
                )}
                <p></p>
                <form onSubmit={this.handleFormSubmit} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div style={{ display: "center", flexDirection: "column", alignItems: "center" }}>
                        <label htmlFor="nome_produto">Nome do Produto</label>
                        <input type="text" id="nome_produto" name="nome_produto" onChange={this.handleInputChange}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            width: "180px",
                            height: "30px",
                            textAlign: "center",
                        }} />
                    </div>
                    <p></p>
                    <div style={{ display: "center", flexDirection: "column", alignItems: "center" }}>
                        <label htmlFor="valor_produto">Valor do Produto</label>
                        <input type="text" id="valor_produto" name="valor_produto" onChange={this.handleInputChange}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            width: "180px",
                            height: "30px",
                            textAlign: "center",
                        }} />
                    </div>
                    <p></p>
                    <div style={{ display: "center", flexDirection: "column", alignItems: "center" }}>
                        <label htmlFor="descricao_produto">Descrição do Produto</label>
                        <input type="text" id="descricao_produto" name="descricao_produto" onChange={this.handleInputChange}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            width: "180px",
                            height: "30px",
                            textAlign: "center",
                        }} />
                    </div>
                    <p></p>
                    <button type="submit" className="custom-button">
                        Cadastrar Produto
                    </button>
                </form> 
            </div>
        );
    }
}
