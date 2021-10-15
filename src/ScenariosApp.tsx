import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import { HomePage } from './HomePage';
import { ProfileMenuPage } from './ProfileMenuPage';
import { AccordionFormPage } from './AccordionFormPage';
import { AddPeoplePopoverPage } from './AddPeoplePopoverPage';
import { CalendarButtonsPage } from './CalendarButtonsPage';

export const appTitle = 'Fluent UI usage scenarios';
export const appTitleSeparator = ' | ';

export const GoBackLink: React.FunctionComponent = () => {
return (
<Link to="/">Go back to main menu</Link>
);
};

export const ScenariosApp: React.FunctionComponent = () => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/menu" exact component={ProfileMenuPage} />
      <Route path="/accordion" exact component={AccordionFormPage} />
      <Route path="/popover" exact component={AddPeoplePopoverPage} />
      <Route path="/button" exact component={CalendarButtonsPage} />
      </Router>
</FluentProvider>
  );
};
