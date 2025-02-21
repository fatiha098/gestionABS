// import Navbar from '../components/Navbar';
// import './dashboard.css'

// function TableAbsences({ absences }) {    
//   return (
//     <div className="table-container">
//       <Navbar />
//       <h1 className="table-title">Tableau des Absences</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Nom</th>
//             <th>Lundi</th>
//             <th>Mardi</th>
//             <th>Mercredi</th>
//             <th>Jeudi</th>
//             <th>Vendredi</th>
//             <th>Samedi</th>
//           </tr>
//         </thead>
//         <tbody>
//           {absences.map((employe) => (
//             <tr key={employe.id}>
//               <td>{employe.nom}</td>
//               {["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"].map((jour) => (
//                 <td 
//                   key={jour} 
//                   style={{ background: employe.jours[jour]?.statut === 'Absent' ? 'red' :
//                           employe.jours[jour]?.statut === 'Présent' ? '#90EE90' : 
//                           employe.jours[jour]?.statut === 'En retard' ? '#FFB347' :
//                           employe.jours[jour]?.statut === 'En sortie autorisée' ? '#FFFFE0' : ''
//                           }}
//                 >
//                   {employe.jours[jour]?.statut || "N/A"}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TableAbsences;


import Navbar from '../components/Navbar';
import './dashboard.css';

function TableAbsences({ demandes }) {
  return (
    <div className="table-container">
      <Navbar />
      <h1 className="table-title">Tableau des Absences</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Semaine 1</th>
            <th>Semaine 2</th>
            <th>Semaine 3</th>
            <th>Semaine 4</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((dem) => (
            <tr key={dem.id}>
              <td>{dem.nom}</td>
              {[1, 2, 3, 4].map((semaine) => (
                <td
                  key={semaine}
                  style={{
                    background: dem.semaines[semaine]?.statut === 'Absent' ? 'red' :
                    dem.semaines[semaine]?.statut === 'Présent' ? '#90EE90' :
                    dem.semaines[semaine]?.statut === 'En retard' ? '#FFB347' :
                    dem.semaines[semaine]?.statut === 'En sortie autorisée' ? '#FFFFE0' : ''
                  }}
                >
                  {dem.semaines[semaine]?.statut || "N/A"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableAbsences;
