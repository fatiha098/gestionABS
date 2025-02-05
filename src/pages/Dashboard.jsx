import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

function TableAbsences(props) {    
  return (
    <>
        <Navbar/>
        <h1>TableAbsences</h1>
        <table border='1'>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Poste</th>
                    <th>date d'embauche</th>
                    <th>Statut</th>
                    <th>Date d'absence</th>
                    <th>Motif</th>
                    <th>Heure de sortie</th>
                </tr>
            </thead>
            <tbody>
                {props.employes.map((employe) => (
                  <tr key={employe.id} style={{background: employe.absence[0]?.motif == 'Congé' ? 'red': ''}}>
                    <td>{employe.nom}</td>
                    <td>{employe.prenom}</td>
                    <td>{employe.poste}</td>
                    <td>{employe.date_embauche}</td>
                    <td>{employe.statut}</td>
                    {employe.absence.map(abs => (
                      <>
                        <td>{abs.date}</td>
                        <td>{abs.motif}</td>
                        <td>{abs.heure_sortie}</td>
                      </>
                  ))}
                    
                  </tr>
                  ))}
            </tbody>
        </table>
    </>
  )
}

export default TableAbsences;