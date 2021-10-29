import React from 'react';
import { Button } from '@fluentui/react-components';
import { appTitle, appTitleSeparator, GoBackLink } from './ScenariosApp';

  const CalendarButtons: React.FunctionComponent = () => {
const onSaveButtonClick = React.useCallback(() => {
alert('The calendar event would have been saved.');
}, []);

  return (
    <>
      <Button onClick={onSaveButtonClick}>Save event</Button>
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
  