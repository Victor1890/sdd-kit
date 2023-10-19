import * as React from 'react';
import MUICheckbox from '@mui/material/Checkbox';

interface ICheckboxProps {
  checked: boolean;
  onChange: (val: boolean) => void;
}

export const Checkbox = ({ checked, onChange }: ICheckboxProps) => {

  const [value, setValue] = React.useState<boolean>(checked);

  return (
    <div>
      <MUICheckbox
        checked={checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.checked);
          onChange(event.target.checked);
        }}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </div>
  );
}
