import api from '../api';

export const loginUser = async (userLoginDto) => {
  const response = await api.post('/login', userLoginDto);
  return response.data;
};
