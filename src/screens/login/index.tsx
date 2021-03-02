import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import styles from './assets/styles.module.css'

const Login: React.FC = () => {
  const schema = yup.object().shape({
    email: yup.string().required('Email Address is Required'),
    password: yup.string().required('Password is Required'),
  })
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data: any) => {
    console.log(data)
  }

  return (
    <div className={styles.background}>
      <Container maxWidth="sm" className={styles.login}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Grid item xs={6} sm={6}>
                <Typography component="h5" variant="h5">
                  Login
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                inputRef={register}
                autoFocus
              />
              {errors.email && <p>{errors.email.message}</p>}
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                inputRef={register}
                autoComplete="current-password"
              />
              {errors.password && <p>{errors.password.message}</p>}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={styles.button}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  )
}

export default Login
