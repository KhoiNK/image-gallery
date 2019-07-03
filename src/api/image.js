import axios from 'axios';

const TRENDING_URL = 'https://api.giphy.com/v1/stickers/trending?api_key=' + process.env.REACT_APP_GIPHY_API_KEY;
export const getTrending = (offset = 0) => {
    //&offset=${offset}&limit=20
    return axios.get(`${TRENDING_URL}&limit=20&offset=${offset}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}