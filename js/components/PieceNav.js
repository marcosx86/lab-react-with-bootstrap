import React from 'react';
import { Link } from 'react-router';

export default class PieceNav extends React.Component {
  render() {
    console.log('PieceNav');
    return (
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-botoes">
            <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Sistema</a>
          </div>

          <div class="collapse navbar-collapse" id="navbar-botoes">
            <ul class="nav navbar-nav">
              <li><Link to="">Início</Link></li>
              <li><Link to="galeria">Galeria</Link></li>
              <li><Link to="sobre">Sobre</Link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">Sair?</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
