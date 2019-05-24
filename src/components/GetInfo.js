import axios from 'axios';

export const searchGithub = () => {
  return axios.get('https://api.github.com/users/karlaeh')
};