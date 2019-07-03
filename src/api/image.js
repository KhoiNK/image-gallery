import axios from 'axios';

const TRENDING_URL = 'https://api.giphy.com/v1/stickers/trending' + process.env.REACT_APP_GIPHY_API_KEY;
export const getTrending = (offset = 0) => {
    const header = {
        'Content-type': 'application/json'
    };
    axios.get(`${TRENDING_URL}&offset=${offset}&limit=20`, { headers: header });
}