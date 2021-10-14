import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@fluentui/react-components';
import { appTitle, appTitleSeparator, GoBackLink } from './ScenariosApp';

const AccordionForm: React.FunctionComponent = () => {
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
};

export const AccordionFormPage: React.FunctionComponent = () => {
    React.useEffect(() => {
   document.title = 'Accordion' + appTitleSeparator + appTitle;
    }, []);
  
  return (
    <>
    <GoBackLink/>
    <AccordionForm />
  </>
  );
};
  