import React, { Component } from 'react';
import axios from 'axios';

export default class CadastrarFuncionario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome_funcionario: '',
            cargo_funcionario: '',
            responseData: null,
            sucesso: false
        };
    }

    handleInputChange = (e) => {
        console.log(e.target.value)
        const { value, name } = e.target;
        if(name === "nome_funcionario"){
            this.setState({ nome_funcionario: value });  
        } else {
            this.setState({ cargo_funcionario: value }); 
        } 
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        const data = {
            nome_funcionario: this.state.nome_funcionario,
            cargo_funcionario: this.state.cargo_funcionario
        };

        axios.post('http://localhost:8080/cadastrarfuncionario', data)
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
            <div className="funcionarios">
                {this.state.sucesso && (
                    <div className="sucesso" style={{ color: 'green', fontWeight: 'bold'}}>
                        Funcionário cadastrado com sucesso!
                    </div>
                )}
                <p></p>
                <form onSubmit={this.handleFormSubmit} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <p></p>
                <div style={{ display: "center", flexDirection: "column", alignItems: "center" }}>
                        <label htmlFor="id_funcionario" style={{ fontWeight: "bold", color: "black" }}>Nome Funcionário </label>
                        <input type="text" id="nome_funcionario" name="nome_funcionario" onChange={this.handleInputChange}
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
                        <label htmlFor="cargo_funcionario" style={{ fontWeight: "bold", color: "black" }} >Cargo </label>
                        <input type="text" id="cargo_funcionario" name="cargo_funcionario" onChange={this.handleInputChange}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            width: "250px",
                            height: "30px",
                            textAlign: "center",
                        }} />
                    </div>
                    <button type="submit" className="custom-button">
                        Cadastrar Funcionário
                    </button>
                </form> 
            </div>
        );
    }
}
