import axios from 'axios';

export default axios.create(
    {
baseURL:'https://api.unsplash.com',
headers: {
    Authorization: 'Client-ID b0ad598918921487d66a558c1b9051f2208a32f8b26c838d8ce8149c7ed63b27'
  } 
    }
);