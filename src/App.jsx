import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedHome from './components/ProtectedHome'
import ProtecteRoutes from './components/ProtecteRoutes'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedHome/>}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route element={<ProtecteRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<Pokemon />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App