import {Box, CircularProgress, Link, Stack, Typography} from '@mui/material';
import AddLinkForm from './AddLinkForm';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {createLink} from '../linksThunks';
import {LinkType} from '../../../types';
import { useState} from 'react';
import {apiURL} from '../../../constants';
import {selectCreatingLink} from '../linksSlice';

const AppPage = () => {
  const dispatch = useAppDispatch();
  const isCreatingLink = useAppSelector(selectCreatingLink);
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
        {isCreatingLink ? (
          <CircularProgress />
        ) : (
          shortUrl && (
            <>
              <Typography variant="body2" component="div">Your link now looks like this:</Typography>
              <Link
                href={`${apiURL}/links/${shortUrl}`}
              >
                {`${apiURL}/links/${shortUrl}`}
              </Link>
            </>
          )
        )}
      </Stack>
    </Box>
  );
};

export default AppPage;

