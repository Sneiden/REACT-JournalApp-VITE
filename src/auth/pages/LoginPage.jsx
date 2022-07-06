import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material';

import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';
import { startGoogleSingIn, startLoginWithEmailPassword } from '../../store/auth';

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'correo@dominio.com',
    password: '123456',
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword(email, password));

  };

  const onGoogleSingIn = (event) => {
    event.preventDefault();
    dispatch(startGoogleSingIn());
  };

  return (

    <AuthLayout title='Login'>

      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='Correo@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='Contraseña'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item
            xs={12}
            sx={{ mt: 2 }}
            display={!!errorMessage ? '' : 'none'}
          >
            <Alert severity='error'>
              {errorMessage}
            </Alert>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={12} sm={6}>
              <Button
                type='submit'
                variant='contained'
                fullWidth
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                fullWidth
                onClick={onGoogleSingIn}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  )
}