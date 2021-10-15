import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <Route path="/" component={Home} exact={true} /> {/* exact props는 Route 컴포넌트가 path props가 정확하게 일치하는 URL에만 반응한다 */}
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
