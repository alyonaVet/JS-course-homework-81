import {Box, Link, Stack, Typography} from '@mui/material';
import AddLinkForm from './AddLinkForm';
import {useAppDispatch} from '../../../app/hooks';
import {createLink} from '../linksThunks';
import {LinkType} from '../../../types';
import { useState} from 'react';
import {apiURL} from '../../../constants';

const AppPage = () => {
  const dispatch = useAppDispatch();
  const [shortUrl, setShortUrl] = useState<string | null>(null);

  const submitHandler = async (link: LinkType) => {
    const result = await dispatch(createLink(link)).unwrap();
    setShortUrl(result.shortUrl);
  };

  return (
    <Box sx={{padding: 2, textAlign: 'center'}}>
      <Stack spacing={4} alignItems="center" direction="column" mt={4}>
        <Typography variant="h4" component="div">Shorten your link!</Typography>
        <AddLinkForm onSubmit={submitHandler}/>
        {shortUrl && (
          <>
            <Typography variant="body2" component="div">Your link now looks like this:</Typography>
            <Link
              href={`${apiURL}/links/${shortUrl}`}
              target="_blank"
            >
              {`${apiURL}/links/${shortUrl}`}
            </Link>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default AppPage;

