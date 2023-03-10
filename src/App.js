import React from 'react';
import './styles/Style.css';
import './styles/buttonstyle.css';
import './styles/contentstyle.css';
import Header from './components/Header';
import Name from './components/Name';
import Content from './components/Content';

function App() {
  return (
    <div>
      <div class="App">
        <div class="title">TO-DO LIST</div>
        <Name/>
        <Header/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
