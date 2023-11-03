import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div>
                <img src="logo.png" alt="" width="780" height="230" />
                <h1>Sistema para Delivery</h1>
            </div>

            <nav>
                <ul className="horizontal-list">
                    <li>
                        <Link to="/clientes">Clientes</Link>
                    </li>
                    <li>
                        <Link to="/funcionarios">Funcionários</Link>
                    </li>
                    <li>
                        <Link to="/produtos">Produtos</Link>
                    </li>
                    <li>
                        <Link to="/relatorios">Pedidos</Link>
                    </li>
                    
                </ul>
            </nav>
            <nav>
                <ul className="horizontal-list">
                    <li>
                        <Link to="/cadastrarclientes">Novo Cliente</Link>
                    </li>
                    <li>
                        <Link to="/cadastrarfuncionario">Novo Funcionario</Link>
                    </li>
                    <li>
                        <Link to="/cadastrarproduto">Novo Produto</Link>
                    </li>
                    <li>
                        <Link to="/cadastrarPedido">Novo Pedido</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;