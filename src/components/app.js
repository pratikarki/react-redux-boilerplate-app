import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from '../components/streams/StreamCreate';
import StreamEdit from '../components/streams/StreamEdit';
import StreamDelete from '../components/streams/StreamDelete';
import StreamList from '../components/streams/StreamList';
import StreamView from '../components/streams/StreamView';
import Header from '../components/Header';
import history from '../history';

const App = () => {
  return(
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/create" exact component={StreamCreate} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />
        <Route path="/streams/view/:id" exact component={StreamView} />
      </Router>
    </div>
  )
}

export default App;