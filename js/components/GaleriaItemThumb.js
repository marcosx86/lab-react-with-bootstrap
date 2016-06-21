import React from 'react';

export default class GaleriaItemThumb extends React.Component {
  render() {
    const galStyle = {
      height: "150px",
      backgroundColor: "black"
    };
    console.log(this);
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div className="well">
          Oi
        </div>
      </div>
    );
  }
}
