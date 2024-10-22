import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://195f-1-170-122-21.ngrok-free.app/ndu_user/api',
  timeout: 1000,
});

export default instance;
