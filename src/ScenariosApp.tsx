import React from 'react';
import { FluentProvider, teamsLightTheme, Button, Menu, MenuTrigger, MenuList, MenuPopover, MenuGroup, MenuGroupHeader, MenuItem, MenuItemCheckbox } from '@fluentui/react-components';

export const StatusSubmenu: React.FunctionComponent = () => {
return (
<Menu>
  <MenuTrigger>
    <MenuItem>Status</MenuItem>
    </MenuTrigger>

  <MenuPopover>
    <MenuList>
      <MenuItem>Online</MenuItem>
      <MenuItem>Away</MenuItem>
      <MenuItem>Offline</MenuItem>
    </MenuList>
  </MenuPopover>
  </Menu>
);
}

export const ScenariosApp: React.FunctionComponent = () => {
  return (
    <FluentProvider theme={teamsLightTheme}>
  <Menu>
    <MenuTrigger>
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
</FluentProvider>
  );
}
