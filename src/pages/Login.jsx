import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const Navigate = useNavigate()

        // Charger les utilisateurs du fichier JSON
    useEffect(() => {
        fetch("/data/responsableRH.json") // Le fichier doit être dans public/
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error("Erreur chargement JSON", err));
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        setError(""); // Réinitialise les erreurs

        const user = users.responsableRH.find(user => user.email === email && user.password === password);
         // Vérifier si l'utilisateur existe
    if (user.email == email && user.password === password) {
      localStorage.setItem("user", JSON.stringify(user)); // Stocker l'utilisateur connecté
      Navigate('/');
      setIsLoggedIn(true);
    } else {
      setError("Email ou mot de passe incorrect");
    }
  };
  return (
    <div className='container-form'>
    {isLoggedIn ? (
      <h2>Bienvenue, {email} !</h2>
    ) : (
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /> <br />
        <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} /><br />
        <button type="submit">Se connecter</button>
      </form>
    )}
    {error && <p style={{ color: "red" }}>{error}</p>}
  </div>
  )
}

export default Login