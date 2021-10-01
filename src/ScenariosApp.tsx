import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FluentProvider, teamsLightTheme, Button, Menu, MenuTrigger, MenuList, MenuPopover, MenuGroup, MenuGroupHeader, MenuItem, MenuItemCheckbox, MenuItemRadio, Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@fluentui/react-components';

const appTitle = 'Fluent UI usage scenarios';
const appTitleSeparator = ' | ';

const GoBackLink: React.FunctionComponent = () => {
return (
<Link to="/">Go back to main menu</Link>
);
};

const StatusSubmenu: React.FunctionComponent = () => {
return (
<Menu>
  <MenuTrigger>
    <MenuItem>Status</MenuItem>
    </MenuTrigger>

  <MenuPopover>
    <MenuList>
      <MenuItemRadio name="status" value="online" defaultChecked={true}>Online</MenuItemRadio>
      <MenuItemRadio name="status" value="away">Away</MenuItemRadio>
      <MenuItemRadio name="status" value="offline" disabled>Offline</MenuItemRadio>
    </MenuList>
  </MenuPopover>
  </Menu>
);
}

const ProfileMenu = () => {
return (
  <Menu>
    <MenuTrigger >
      <Button>Profile</Button>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuGroup>
          <MenuGroupHeader>Information</MenuGroupHeader>
          <MenuItem>Help</MenuItem>
        </MenuGroup>
        <MenuGroup>
          <MenuGroupHeader>Settings</MenuGroupHeader>
          <MenuItemCheckbox name="settings" value="runAtStartup">Run at startup</MenuItemCheckbox>
          <MenuItemCheckbox name="settings" value="showNotifications">Show notifications</MenuItemCheckbox>
        </MenuGroup>
        <MenuGroup>
          <MenuGroupHeader>Account</MenuGroupHeader>
          <StatusSubmenu />
          <MenuItem>Logout</MenuItem>
        </MenuGroup>
      </MenuList>
    </MenuPopover>
  </Menu>
);  
}

const AccordionForm = () => {
return (
<Accordion defaultOpenItems={'personalDetails'}>
<AccordionItem value="personalDetails">
  <AccordionHeader>Personal details</AccordionHeader>
  <AccordionPanel>
    <label htmlFor="name">Name:</label><input type="text" id="name" name="name" />
    <label htmlFor="email">Email:</label><input type="text" id="email" name="email" />
  <div role="group" aria-label="Gender">
<input type="radio" id="male" name="gender" value="male" /><label htmlFor="male">male</label>
<input type="radio" id="female" name="gender" value="female" /><label htmlFor="female">female</label>
  </div>
  </AccordionPanel>
</AccordionItem>
<AccordionItem value="residence">
  <AccordionHeader>Residence</AccordionHeader>
  <AccordionPanel>
  <label htmlFor="street">Street:</label><input type="text" id="street" name="street" />
  <label htmlFor="city">City:</label><input type="text" id="city" name="city" />
  <label htmlFor="country">Country:</label><input type="text" id="country" name="country" />
  </AccordionPanel>
</AccordionItem>
<AccordionItem value="hobbies">
  <AccordionHeader>Hobbies</AccordionHeader>
  <AccordionPanel>
  <div role="group" aria-label="Hobbies">
<input type="checkbox" id="books" name="hobbies" value="books" /><label htmlFor="books">books</label>
<input type="checkbox" id="sports" name="hobbies" value="sports" /><label htmlFor="sports">sports</label>
<input type="checkbox" id="music" name="hobbies" value="music" /><label htmlFor="music">music</label>
<input type="checkbox" id="travelling" name="hobbies" value="travelling" /><label htmlFor="travelling">travelling</label>
  </div>
  </AccordionPanel>
</AccordionItem>
</Accordion>
);
}

const HomePage = () => {
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
}

const ProfileMenuPage = () => {
  React.useEffect(() => {
 document.title = 'Profile Menu' + appTitleSeparator + appTitle;
  }, []);

return (
  <>
  <GoBackLink/>
  <ProfileMenu />
  </>
);  
}

const AccordionFormPage = () => {
  React.useEffect(() => {
 document.title = 'Accordion' + appTitleSeparator + appTitle;
  }, []);

return (
  <>
  <GoBackLink/>
  <AccordionForm />
</>
);
}

export const ScenariosApp: React.FunctionComponent = () => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/profile-menu" exact component={ProfileMenuPage} />
      <Route path="/accordion" exact component={AccordionFormPage} />
      </Router>
</FluentProvider>
  );
}
