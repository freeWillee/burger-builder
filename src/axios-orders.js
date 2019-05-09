import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-77b4e.firebaseio.com/'
});

export default instance;