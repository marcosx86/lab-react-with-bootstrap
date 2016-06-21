import React from 'react';
import { Link } from 'react-router';

export default class PageGaleria extends React.Component {
  render() {
    var list = [
      <Link to="/galeria/1">Gal 1</Link>,
      <Link to="/galeria/2">Gal 2</Link>
    ];
    return (
      <div className="container">
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="panel panel-default">
            <div className="panel-heading">Opções</div>
            <div className="panel-body">
              <ul className="list-group">
                {list.map((p, i) => {
                  var rID = Math.floor(Math.random() * Date.now());
                  return (
                    <li key={rID} className="list-group-item">{p}</li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-6 col-xs-12">
          {this.props.children}
        </div>
      </div>
    );
  }
}
