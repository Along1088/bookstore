import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'

import HomePage from './pages/Home'
import BookAddPage from './pages/BookAdd'
import BookList from './pages/BookList';
import BookEditPage from './pages/BookEdit'
import BookSelectPage from './pages/BookSelect';


ReactDOM.render(
    <HashRouter>
        <Route path='/' component={HomePage}></Route>
        <Route path='/book/add' component={BookAddPage}></Route>
        <Route path='/book/booklist' component={BookList}></Route>
        <Route path='/book/bookedit' component={BookEditPage}></Route>
        <Route path='/book/select' component={BookSelectPage}></Route>
    </HashRouter>
    , document.getElementById('app'));
