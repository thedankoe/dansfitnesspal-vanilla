import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getFoods() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const API_KEY = '92d6c949d030ac3e4be9a4fcf6ce5b35';
        const APP_ID = 'dc093e80';
        try {
            const res = await axios.get(`${proxy}https://trackapi.nutritionix.com/v2/search/instant?query=${this.query}`, {
                headers: {
                   'x-app-id': `${APP_ID}`,
                   'x-app-key': `${API_KEY}`,
                }
            });
            this.result = res.data.common;
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}