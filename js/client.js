import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import LayoutMain from './components/LayoutMain';
import PageIndex from './components/PageIndex';
import PageGaleria from './components/PageGaleria';
import PageSobre from './components/PageSobre';
import ContentGaleriaHome from './components/ContentGaleriaHome';
import ContentGaleriaGaleria from './components/ContentGaleriaGaleria';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={LayoutMain}>
      <IndexRoute component={PageIndex} />
      <Route path="galeria" component={PageGaleria}>
        <IndexRoute component={ContentGaleriaHome} />
        <Route path=":id" component={ContentGaleriaGaleria} />
      </Route>
      <Route path="sobre" component={PageSobre} />
    </Route>
  </Router>,
  app
);
