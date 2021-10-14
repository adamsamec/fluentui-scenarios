import React from 'react';
import { Button, Menu, MenuTrigger, MenuList, MenuPopover, MenuGroup, MenuGroupHeader, MenuItem, MenuItemCheckbox, MenuItemRadio } from '@fluentui/react-components';
import { appTitle, appTitleSeparator, GoBackLink } from './ScenariosApp';

interface IStatusSubmenuProps {
  checkedValues: Record<string, string[]>;
  onChange: OnCheckedValueChangeCallback;
}

const StatusSubmenu: React.FunctionComponent<IStatusSubmenuProps> = (props: IStatusSubmenuProps) => {
  const {checkedValues, onChange} = props;

  return (
  <Menu checkedValues={checkedValues} onCheckedValueChange={onChange}>
    <MenuTrigger>
      <MenuItem>Status</MenuItem>
      </MenuTrigger>
  
    <MenuPopover>
      <MenuList>
        <MenuItemRadio name="status" value="online">Online</MenuItemRadio>
        <MenuItemRadio name="status" value="away">Away</MenuItemRadio>
        <MenuItemRadio name="status" value="offline" disabled>Offline</MenuItemRadio>
      </MenuList>
    </MenuPopover>
    </Menu>
  );
};

type OnCheckedValueChangeDataType = {
  name: string,
  checkedItems: string[],
};

type OnCheckedValueChangeCallback = (event: React.MouseEvent | React.KeyboardEvent, data: OnCheckedValueChangeDataType) => void;

const ProfileMenu: React.FunctionComponent = () => {
  const [checkedValues, setCheckedValues] = React.useState({status: ['online']});
  const onChange = (event: React.MouseEvent | React.KeyboardEvent, {name, checkedItems}: OnCheckedValueChangeDataType) => {
  setCheckedValues((state) => ({...state, [name]: checkedItems}));
  };

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
            <StatusSubmenu checkedValues={checkedValues} onChange={onChange} />
            <MenuItem>Logout</MenuItem>
          </MenuGroup>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export const ProfileMenuPage: React.FunctionComponent = () => {
    React.useEffect(() => {
   document.title = 'Menu' + appTitleSeparator + appTitle;
    }, []);
  
  return (
    <>
    <GoBackLink/>
    <ProfileMenu />
    </>
  );  
  };
  