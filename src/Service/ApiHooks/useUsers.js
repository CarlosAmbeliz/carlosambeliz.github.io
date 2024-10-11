import { useState } from 'react';
import { loginUser } from '../Api/User/userService';
import { UserLoginDto } from '../Api/User/dto/UserLoginDto'
const useUsers = () => {
    const [userLoginDto, setUserLoginDto] = useState(new UserLoginDto());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const Login = async () => {
        try {
            setLoading(true);
            userLoginDto.Validate();
            var response = await loginUser(userLoginDto);
            alert('Inicio valido')
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false);
        }

    }

    return { Login, userLoginDto, setUserLoginDto, loading, error };
};

export default useUsers;
