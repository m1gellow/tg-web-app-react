import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'
import Selection from './components/Selection/Selection';
import LandingPage from './components/LandigPage/LandingPage';

function App() {

  useEffect(() => {
      if(window.Telegram && window.Telegram.WebApp){
          window.Telegram.WebApp.expand();
      }
  }, [])

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/selection' element={<Selection/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
