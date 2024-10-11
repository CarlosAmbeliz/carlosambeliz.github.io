import React from 'react';
import { Container, TextField, Button, Typography, Box, CircularProgress } from '@mui/material';
import useUsers from '../../Service/ApiHooks/useUsers';

const LoginForm = () => {

    const { userLoginDto, setUserLoginDto, Login, loading, error } = useUsers();

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setUserLoginDto((prevDto) => ({
            ...prevDto,
            [name]: value,
            Validate: prevDto.Validate,
        }));
    }

    const Submit = async (e) => {
        e.preventDefault();
        await Login();
    }

    return (
        loading ? 
            <CircularProgress/>
        :
        <Container component="main" onSubmit={Submit} maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 'auto',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography component="h1" variant="h5">
                    Iniciar Sesión
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Correo Electrónico"
                        autoComplete="email"
                        autoFocus
                        value={userLoginDto.nombre}
                        name="nombre"
                        onChange={HandleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Contraseña"
                        type="password"
                        autoComplete="current-password"
                        value={userLoginDto.password}
                        name="password"
                        onChange={HandleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Iniciar Sesión
                    </Button>
                </Box>
            </Box>

            <p>{error}</p>
        </Container>
    );
};

export default LoginForm;
