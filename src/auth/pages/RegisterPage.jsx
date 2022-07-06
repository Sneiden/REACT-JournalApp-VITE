import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material'

import { startCreatingUserWithEmailPassword } from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'

const formData = {
  email: '',
  password: '',
  displayName: ''
  // email: 'correo@dominio.com',
  // password: '123456',
  // displayName: 'Hector Aranda'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'], 
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const {status, errorMessage} = useSelector(state => state.auth)
  const [formSubmited, setFormSubmited] = useState(false);

  const isAuthenticating = useMemo( () => status === 'checking', [status])

  const { 
    displayName, email, password, onInputChange, formState,
    displayNameValid, emailValid, passwordValid, isFormValid  
  } = useForm( formData, formValidations );


  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true)
    if (!isFormValid) return;
    console.log(formState);
    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (

    <AuthLayout title='Register'>

      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre completo'
              type='text'
              name='displayName'
              value={displayName}
              placeholder='Nombre completo'
              fullWidth
              onChange={onInputChange}
              error={ !!displayNameValid && formSubmited}
              helperText={ displayNameValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              name='email'
              value={email}
              placeholder='Correo@google.com'
              fullWidth
              onChange={onInputChange}
              error={ !!emailValid && formSubmited}
              helperText={ emailValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              name='password'
              value={password}
              placeholder='Contraseña'
              fullWidth
              onChange={onInputChange}
              error={ !!passwordValid && formSubmited}
              helperText={ passwordValid }
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid 
              item 
              xs={12}
              display={ !!errorMessage? '':'none' }
            >
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>

            <Grid item xs={12}>
              <Button 
                variant='contained' 
                fullWidth
                type='submit'
                disabled={isAuthenticating}
              >
                Crear cuenta
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  )
}
