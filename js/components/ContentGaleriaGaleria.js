import React from 'react';

import GaleriaItemThumb from './GaleriaItemThumb';

export default class ContentGaleriaGaleria extends React.Component {
  render() {
    var gID = this.props.params.id;
    var listaThumbs = [
      <GaleriaItemThumb />,
      <GaleriaItemThumb />,
      <GaleriaItemThumb />,
      <GaleriaItemThumb />,
      <GaleriaItemThumb />,
      <GaleriaItemThumb />,
      <GaleriaItemThumb />
    ];

    return (
      <div className="container-fluid">
        <p>
          Galeria número {gID}
        </p>
        <div className="row">
          {listaThumbs.map((o, i) => {
            var uID = Math.floor(Math.random() * Date.now());
            return (<GaleriaItemThumb key={uID} />);
          })}
        </div>
      </div>
    );
  }
}
