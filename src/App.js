
import './App.css';
import AddTournamnet from './components/AddTournamnet';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Tournaments from './components/Tournament/Tournaments';
import About from './components/About';
import Home from './components/Home';
import TournamentDetails from './components/Tournament/TournamentDetails'
function App() {
  return (
    <div className="App">
     <header>
      <Header/>
     </header>
     <main>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/add' element={<AddTournamnet/>}/>
        <Route path='/tournaments' element={<Tournaments/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/updateTournaments/:id' element={<TournamentDetails/>}/>
      </Routes>
     </main>
    </div>
  );
}

export default App;
