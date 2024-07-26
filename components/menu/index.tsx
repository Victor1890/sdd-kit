import React, { MouseEvent, useState } from 'react';
import Button from '@mui/material/Button';
import MUIMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export interface IMenuItem {
  name: string;
  onClick?: () => void;
}

export interface IMenuProps {
  name: string;
  items: IMenuItem[];
}

export const Menu = ({ name, items = [] }: IMenuProps) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {name}
      </Button>
      <MUIMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items &&
          items.map((item: IMenuItem, index: number) => (
            <MenuItem
              key={index}
              onClick={() => {
                handleClose();
                if (item.onClick) item.onClick();
              }}
            >
              {item.name}
            </MenuItem>
          ))}
      </MUIMenu>
    </div >
  );
}
