import { Route, Routes } from 'react-router-dom';
import './main.scss'

import MainPage from './MainPage'
import MainMenu from './menu';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Tesla"
  }, [])
  return (
    
    <>
    <title>Tesla</title>
      <MainMenu></MainMenu>
     <Routes>
      <Route path='/' element={<MainPage/>}/>
     </Routes>
    </>
  )
}

export default App
