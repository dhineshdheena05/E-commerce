import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Cart from './components/Cart';
import BaseLayout from './components/BaseLayout';
import Women from './components/Women';
import Men from './components/Men';
import Clothes from './components/Clothes';
import Accessories from './components/Accessories';
import ShowProduct from './components/ShowProduct';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login/Login';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/cart" component={Cart} />
        <Route path="/women" component={Women}  />
        <Route path="/men" component={Men} />
        <Route path="/clothes" component={Clothes}  />
        <Route path="/accessories" component={Accessories} />
        <Route path="/Login" component={Login}  />
        <Route exact path="/products/:id" component={ShowProduct} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
