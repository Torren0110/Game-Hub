import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b0dc43f3bb8c49d39d84bf3552635905'
    }
})