import axios from "axios";

const ACCESSKEY = 'WHLnFwCnRU_hgkU0QvtphikdKCcX_8IYP7sGB2zr7Ow';

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const getFetchUrl = ( page, per_page, query) => {
  return `/photos?client_id=${ACCESSKEY}&page=${page}&per_page=${per_page}&query=${query}`;
}