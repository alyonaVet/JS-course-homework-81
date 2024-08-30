import {Button, Stack, TextField} from '@mui/material';
import {ChangeEvent, useState} from 'react';
import * as React from 'react';
import {LinkType} from '../../../types';

interface Props {
  onSubmit: (link: LinkType) => void;
}

const AddLinkForm: React.FC<Props> = ({onSubmit}) => {
  const [link, setLink] = useState<LinkType>({
    originalUrl: '',
  });

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setLink((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({...link});
  };

  return (
    <Stack component="form" onSubmit={onFormSubmit} alignItems={"center"} gap={3} sx={{width: 500, maxWidth: '100%'}} >
      <TextField
        label="Enter your URL here"
        id="link"
        name="originalUrl"
        value={link.originalUrl}
        onChange={onFieldChange}
        required
        fullWidth
      />
      <Button
        variant="outlined"
        type="submit"
      >
        Shorten
      </Button>
    </Stack>
  );
};

export default AddLinkForm;