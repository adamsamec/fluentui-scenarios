import React from 'react';
import { Link } from 'react-router-dom';
import { appTitle } from './ScenariosApp';

export const HomePage: React.FunctionComponent = () => {
  React.useEffect(() => {
    document.title = appTitle;
     }, []);
   
return (
  <>
  <h1>Fluent UI usage scenarios</h1>
<nav>
  <ul>
    <li>
    <Link to="/menu">Menu</Link>
    </li>
    <li>
    <Link to="/accordion">Accordion</Link>
    </li>
    <li>
    <Link to="/popover">Popover</Link>
    </li>
    <li>
    <Link to="/button">Button</Link>
    </li>
  </ul>
</nav>
</>
);
};
