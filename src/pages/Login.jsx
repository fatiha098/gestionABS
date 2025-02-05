import React, { useEffect, useState } from 'react'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

         // Vérifier si l'utilisateur existe
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user)); // Stocker l'utilisateur connecté
      setIsLoggedIn(true);
    } else {
      setError("Email ou mot de passe incorrect");
    }
  };
  return (
    <div>
    {isLoggedIn ? (
      <h2>Bienvenue, {email} !</h2>
    ) : (
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Se connecter</button>
      </form>
    )}
    {error && <p style={{ color: "red" }}>{error}</p>}
  </div>
  )
}

export default Login