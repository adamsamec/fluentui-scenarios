import React from 'react';
import { Link } from 'react-router-dom';
import { appTitle } from './ScenariosApp';

export const HomePage = () => {
  React.useEffect(() => {
    document.title = appTitle;
     }, []);
   
return (
  <>
  <h1>Fluent UI usage scenarios</h1>
<nav>
  <ul>
    <li>
    <Link to="/profile-menu">Profile menu</Link>
    </li>
    <li>
    <Link to="/accordion">Accordion</Link>
    </li>
  </ul>
</nav>
</>
);
};
