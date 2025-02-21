import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
function EditStatut(props) {

  const [employes, setEmployes] = useState([]);

  // Load the employees from localStorage when the component mounts
  useEffect(() => {
    const savedEmployes = localStorage.getItem('employes');
    if (savedEmployes) {
      setEmployes(JSON.parse(savedEmployes));  // Convert the string back to an array
    }
  }, []);

  // Function to handle the status change
  const handleStatusChange = (id, status, heureSortie = null) => {
    const updatedEmployes = props.employes.map(employee => {
      if (employee.id === id) {
        // Update the employee's status and time (if applicable)
        employee.statut = status;
        if (status === 'En sortie autorisée') {
          employee.absence = [{ date: new Date().toLocaleDateString(), motif: 'Rendez-vous médical', heure_sortie: heureSortie }];
        }
      }

      return employee;
    });
    console.log(updatedEmployes);

    // Save the updated employees array to localStorage
    localStorage.setItem('employes', JSON.stringify(updatedEmployes));

    // Update the state to trigger a re-render
    setEmployes(updatedEmployes);

  }
  return (
    <>
        <Navbar/>

      <table border='1'>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Poste</th>
                    <th>Statut</th>
                    <th colspan='2'>Actions</th>
                </tr>
            </thead>
            <tbody>
              {props.employes.map((employe) => (
                <tr key={employe.id}>
                  <td>{employe.nom}</td>
                  <td>{employe.prenom}</td>
                  <td>{employe.poste}</td>
                  <td>{employe.statut}
                    {employe.statut === 'En sortie autorisée' && (
                        <div>Sortie à : {employe.absence[0].heure_sortie}</div>
                      )}</td>
                  <td>
                    <button onClick={() => handleStatusChange(employe.id, 'Absent')}>Mark as Absent</button>
                  </td>
                  <td>
                    <button onClick={() => handleStatusChange(employe.id, 'En sortie autorisée', '14:30')}>Mark as On Leave</button>
                  </td>
                  
                </tr>
                ))}
          </tbody>
      </table>
    </>
  )
}

export default EditStatut;        