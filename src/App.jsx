import {Route, Routes} from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import EditStatut from './pages/EditStatut'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Login from './pages/Login'

function App() {
  
  const [employes, setEmployes] = useState([]);
  const [responsableRH, setResponsablesRH] = useState([]);
  const [absences, setAbsences] = useState([]);

  useEffect(() => {

    axios.get('/data/employes.json')
    .then(response => setEmployes(response.data.employes))
    .catch(error => console.log('erreur', error));

    axios.get('/data/responsablesRH.json')
    .then(response => setResponsablesRH(response.data.responsablesRH))
    .catch(error => console.log('error', error))

    axios.get('/data/absences.json')
    .then(response => setAbsences(response.data.absences))
    .catch(error => console.log('error', error))
  }, [])

  return (
    <>
        <Routes>
          <Route path='/login' element={<Login employes={employes}/>}></Route>
          <Route path='/' element={<Dashboard absences={absences}/>}></Route>
          <Route path='/editStatut' element={<EditStatut employes={employes}/>}></Route>
          <Route path='/login' element={<Login responsableRH={responsableRH}/>}></Route>
        </Routes>
    </>
  )
}

export default App
