import {Route, Link} from 'wouter'
import Home from './pages/Home/index'
import Search from './pages/Search/index'

import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img src="/weatherify-logo.png" className="App-logo" alt="logo" />
        </Link>
        <h3>Weather, on Time</h3>

        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/search/:city"
          component={Search}
        />
        
      </section>
    </div>
  );
}

export default App;
