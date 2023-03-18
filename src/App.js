import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProductsRoute from './components/Products'
import CartRoute from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <ProductsRoute exact path="/products" component={ProductsRoute} />
    <CartRoute exact path="/cart" component={CartRoute} />
    <Route component={NotFound} />
  </Switch>
)

export default App
