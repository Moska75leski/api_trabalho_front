import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ClientesList from "./relat_clientes";
import CadastroCLientes from "./cadastro_clientes";
import FuncionariosList from "./relat_funcionarios";
import CadastrarFuncionario from './cadastro_funcionario';
import ProdutosList from './relat_produtos';
import CadastrarProduto from './cadastro_produto';
import PedidosList from './relat_pedidos';
import CadastrarPedido from './cadastro_pedido';
import Header from './header';

function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/clientes" element={<ClientesList />} />
        <Route path="/cadastrarclientes" element={<CadastroCLientes />} />
        <Route path="/funcionarios" element={<FuncionariosList />} />
        <Route path="/cadastrarfuncionario" element={<CadastrarFuncionario />} />
        <Route path="/produtos" element={<ProdutosList />} />
        <Route path="/cadastrarProduto" element={<CadastrarProduto />} />
        <Route path="/cadastrarPedido" element={<CadastrarPedido />} />
        <Route path="/relatorios" element={<PedidosList />} />
      </Routes>
    </Router>
  );
}

export default App;