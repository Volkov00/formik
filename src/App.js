import style from './App.module.sass';
import React, { useState, useEffect } from 'react';
import Header from 'components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';
function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={LoginForm} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
