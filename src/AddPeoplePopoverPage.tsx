import React from 'react';
import { Button, Popover, PopoverTrigger, PopoverSurface } from '@fluentui/react-components';
import { appTitle, appTitleSeparator, GoBackLink } from './ScenariosApp';

interface IAddPeopleContentProps {
  setPopoverOpened: (state: boolean) => void;
}

const AddPeopleContent: React.FunctionComponent<IAddPeopleContentProps> = (props: IAddPeopleContentProps) => {
const {setPopoverOpened} = props;

  return (
    <>
    <label htmlFor="addPeopleInput">Enter name, email or tag</label>
    <input type="text" name="addPeopleInput" id="addPeopleInput" />
    <Button onClick={() => {
      setPopoverOpened(false);
    }}>Cancel</Button>
    </>
  );
}
  
  const AddPeoplePopover = () => {
    const [popoverOpened, setPopoverOpened] = React.useState(false);

  return (
    <Popover
    open={popoverOpened}
    onOpenChange={(event, data) => {
      setPopoverOpened(data.open);
    }}
    trapFocus
    >
    <PopoverTrigger>
      <Button>Add people</Button>
    </PopoverTrigger>

    <PopoverSurface aria-label="Add someone to the chat">
      <AddPeopleContent setPopoverOpened={setPopoverOpened} />
    </PopoverSurface>
  </Popover>
  );
};

export const AddPeoplePopoverPage = () => {
    React.useEffect(() => {
   document.title = 'Popover' + appTitleSeparator + appTitle;
    }, []);
  
  return (
    <>
    <GoBackLink/>
    <AddPeoplePopover />
    </>
  );  
  };
  