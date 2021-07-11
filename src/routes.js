import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'
import Cards from './components/Cards'
import Main from './components/Main'
import Login from './components/Login'
import Signup from './components/Signup'
import ScrollToTop from './components/ScrollTop'
import AddressForm from './components/AddressForm'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Login } />
          <Route exact path='/home' component={ Main } />
          <Route exact path='/dashboard' component={ Dashboard } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/wizard' component={ Wizard } />
          <Route exact path='/cards' component={ Cards } />
          <Route exact path='/shipping' component={ AddressForm } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )