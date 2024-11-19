import axios from 'axios';
const API_URL="https://api.themoviedb.org/3/movie/";
const language ="&language=es-ES";

const getPopularMovies = async()=>{
    try {
        return await axios.get(`${API_URL}now_playing?api_key=${import.meta.env.VITE_API_KEY}${language}`).then(res =>{
                return res.data.results;
        });
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

const getMovieData = async(id)=>{
    try {
        return await axios.get(`${API_URL}${id}?api_key=${import.meta.env.VITE_API_KEY}${language}`).then(res =>{
                return res.data;
        });
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

export {getPopularMovies,getMovieData};