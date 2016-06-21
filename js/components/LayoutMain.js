import React from 'react';

import PieceNav from './PieceNav';

export default class LayoutMain extends React.Component {
  render() {
    console.log('LayoutMain');
    return (
      <div class="container">
        <PieceNav />
        {this.props.children}
      </div>
    );
  }
}
