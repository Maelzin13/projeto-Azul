import React from 'react';
import { Grid, Button } from '@mui/material';

import Layout from 'layout';
import Page from 'components/Page';
import { useRouter } from 'next/router';

const ComarchReset = () => {
  const router = useRouter();

  return (
    <Page title="Forms Wizard">
      <Grid container spacing={2.5} justifyContent="center">
        <Grid item xs={12} md={6} lg={7} container justifyContent="center" spacing={2}>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={() => router.replace('/forms/comarch')}>
              Reset
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={() => router.replace('/forms/comarch')}>
              Desbloqueio
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
};

ComarchReset.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ComarchReset;