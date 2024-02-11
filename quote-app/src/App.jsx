import { useState, Fragment } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Global/Navbar'
import Allquotes from './Components/Pages/Allquotes'
import Newquote from './Components/Pages/Newquote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Allquotes />} />
        <Route path='/new' element={<Newquote />} />
      </Routes>
    </Fragment>
  )
}

export default App
