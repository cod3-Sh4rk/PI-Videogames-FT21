const axios = require('axios')
const ALL_VIDEOGAME_URL = require('../')
const {Videogame} = rquire('../db')
function videogamePross(videogame) {
    return {
        name: videogame.name,
        id: videogame.alpha3Code,
        description: videogame.description,
        dateofreleace: videogame.dateofreleace,
        rating: videogame.rating,
        platforms: videogame.platforms, 
    };
};

function generoPross(element) {
    return {
        id: element.id,
        name: element.name,
    };
};

const bulkCreateVideogame = () => {
    return axios.get('')
    .then((result) => {
     let response = result.data.map(el => {
         return videogamePross(el)
     })
     return Videogame.bulkCreate(response)
    })
}


module.exports = {
    videogamePross,
    generoPross,
    bulkCreateCountry
}