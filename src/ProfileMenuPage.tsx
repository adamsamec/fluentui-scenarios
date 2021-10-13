import React from 'react';
import { Button, Menu, MenuTrigger, MenuList, MenuPopover, MenuGroup, MenuGroupHeader, MenuItem, MenuItemCheckbox, MenuItemRadio } from '@fluentui/react-components';
import { appTitle, appTitleSeparator, GoBackLink } from './ScenariosApp';

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
  };
  
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
};

export const ProfileMenuPage = () => {
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
  