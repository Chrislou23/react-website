import * as React from 'react';
import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <div className="e404">
      <h1>Erreur 404</h1>
      <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <p>Essayez plutôt de retourner à <NavLink to="/">l'accueil</NavLink>.</p>
    </div>
  );
}

export default Error;