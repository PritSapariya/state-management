import './App.css';
import { MovieProvider } from './context'

import MovieList from './components/MovieList'
import Nav from './components/nav'
import AddMovie from './components/AddMovie'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
