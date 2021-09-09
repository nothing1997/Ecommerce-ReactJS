import axios from 'axios'

const URL = `https://61270106c2e8920017bc0ab9.mockapi.io/api` // category_special, slide, banner, search_special
const URL2 = `https://61275b59c2e8920017bc0c43.mockapi.io/api` //preferent, product_mobile, feature_special, new_event
const URL3 = `https://y6896.sse.codesandbox.io` //All

export const getDataMobile = () => axios.get(`${URL2}/product_mobile/`)

export const getDataLaptop = () => axios.get(`${URL3}/product_laptop/`)

export const getDataProductSuggest = () => axios.get(`${URL3}/product_suggestion/`)

export const getDataCatagorySpe = () => axios.get(`${URL}/category_special/`)

export const getDataPreferent = () => axios.get(`${URL2}/preferent/`)

export const getDataSlide = () => axios.get(`${URL}/slide/`)

export const getDataNew = () => axios.get(`${URL2}/new_event/`)

export const getDataSearchSpecial = () => axios.get(`${URL}/search_special/`)

export const getDataCatagoryMenu = () => axios.get(`${URL}/category_menu/`)

// CRUD Vote and Comment product 
export const getDataVote = () => axios.get(`${URL3}/vote/`)

export const addChat = (data) => {
    return axios.post(`${URL3}/vote`, data);
};

export const updateChat = (data, chatId) => {
    return axios.put(`${URL3}/vote/${chatId}`, data);
};

export const deleteChat = (chatId) => {
    return axios.delete(`${URL3}/vote/${chatId}`);
};