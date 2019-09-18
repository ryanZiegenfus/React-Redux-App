import axios from "axios";

export const FETCHING_IMAGE_START = "FETCHING_IMAGE_START";
export const FETCHING_IMAGE_SUCCESS = "FETCHING_IMAGE_SUCCESS";
export const FETCHING_IMAGE_FAILURE = "FETCHING_IMAGE_FAILURE";
export const getImages = () => dispatch => {

    const day = (() => {
        const D = Math.floor((Math.random() * 27) + 1)
        return (D < 10 ? `0${D}` : D)
    })();

    const month = (() => {
        const M = Math.floor((Math.random() * 11) + 1)
        return ( M < 10 ? `0${M}` : M)
    })();

    const year = Math.floor((Math.random() * 23) + 1996);

    console.log(year)
    console.log(month)
    console.log(day)
   

    let date = `${year}-${month}-${day}`
    console.log(date)
    dispatch({ type: FETCHING_IMAGE_START });
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=CgjsDn9DlZ5hGgB1Kc7NLS02W9q38h8vrcIbjFmk&date=${date}`)
    .then(res => {
        console.log(res)
    dispatch({ type: FETCHING_IMAGE_SUCCESS, payload: {url: res.data.url, title: res.data.title, description:res.data.explanation }});
    })
    .catch(err => {
        console.log('whoops')
    //dispatch({ type: FETCHING_IMAGE_FAILURE, payload: err.data.? });
    });
};