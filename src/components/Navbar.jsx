import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <ul className='navbar'>
      <li>
        <Link to='/'>Dashboard</Link>
      </li>
      <li>
        <Link to='/editStatut'>edit statut</Link>
      </li>
    </ul>
  )
}

export default Navbar