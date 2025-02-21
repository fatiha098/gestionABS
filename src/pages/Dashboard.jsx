import Navbar from '../components/Navbar';
import './dashboard.css'

function TableAbsences({ absences }) {    
  return (
    <div className="table-container">
      <Navbar />
      <h1 className="table-title">Tableau des Absences</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Mercredi</th>
            <th>Jeudi</th>
            <th>Vendredi</th>
            <th>Samedi</th>
          </tr>
        </thead>
        <tbody>
          {absences.map((employe) => (
            <tr key={employe.id}>
              <td>{employe.nom}</td>
              {["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"].map((jour) => (
                <td 
                  key={jour} 
                  style={{ background: employe.jours[jour]?.statut === 'Absent' ? 'red' :
                          employe.jours[jour]?.statut === 'Présent' ? '#90EE90' : 
                          employe.jours[jour]?.statut === 'En retard' ? '#FFB347' :
                          employe.jours[jour]?.statut === 'En sortie autorisée' ? '#FFFFE0' : ''
                          }}
                >
                  {employe.jours[jour]?.statut || "N/A"}
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
