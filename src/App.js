import './App.css';
import MovieList from './components/MovieList'
import { MovieProvider } from './context';

function App() {

  
  return (
    <MovieProvider>
      <div className="App">
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
