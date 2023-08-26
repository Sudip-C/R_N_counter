import axios from 'axios';

const API_KEY = '2ad3017d';
const BASE_URL = 'http://www.omdbapi.com/';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

export const searchMovies = async (searchText) => {
  try {
    const response = await api.get('/', {
      params: {
        s: searchText,
      },
    });
    return response.data.Search;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (imdbID) => {
  try {
    const response = await api.get('/', {
      params: {
        i: imdbID,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
