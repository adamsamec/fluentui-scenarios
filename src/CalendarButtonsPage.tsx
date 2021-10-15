import React from 'react';
import { Button } from '@fluentui/react-components';
import { appTitle, appTitleSeparator, GoBackLink } from './ScenariosApp';

  const CalendarButtons: React.FunctionComponent = () => {
  return (
    <>
      <Button>save event</Button>
      <Button disabled>Delete event</Button>
      <Button disabledFocusable>Show upcoming events</Button>
      </>
  );
};

export const CalendarButtonsPage: React.FunctionComponent = () => {
    React.useEffect(() => {
   document.title = 'Button' + appTitleSeparator + appTitle;
    }, []);
  
  return (
    <>
    <GoBackLink/>
    <CalendarButtons />
    </>
  );  
  };
  