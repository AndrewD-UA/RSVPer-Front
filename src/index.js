import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import './css/index.css';
import Header from './Header';
import Content from './Content';
import Home from './Home';

export {default as HomeCSS} from './css/Home.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App(){

  const [pageState, changePage] = useState(<Home />);

  return(
    <div className="mainContainer">
      <Header changePage = {changePage}/>
      <Content pageState = {pageState}/>
    </div>    
  )
}
