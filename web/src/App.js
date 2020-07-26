import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import DevelopersIndex from './components/Developers/Index';
import DevelopersCreate from './components/Developers/Create';
import DevelopersEdit from './components/Developers/Edit';

export default function App() {
  return (
    <div className="App">
      <Header />

      <Container className="p-3">
        <BrowserRouter>
          <Route path="/" exact component={DevelopersIndex} />
          <Route path="/create" component={DevelopersCreate} />
          <Route path="/edit/:id" component={DevelopersEdit} />
        </BrowserRouter>
      </Container>
    </div>
  );
}
