const API_KEY = 'a46fbbfca42a2fc6db5508cde8e26d9a';
const API_BASE = 'https://api.themoviedb.org/3/';

/*
- originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários
*/

// função que basicamente pega o endpoint e faz requisição e retorna o resultado da requisição
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export const getHomeList = async() => {
        return [
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: await basicFetch(`discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await basicFetch(`trending/all/week?&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch(`movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`discover/movie?with_genres=28?&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`discover/movie?with_genres=35?&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`discover/movie?with_genres=27?&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`discover/movie?with_genres=10749?&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'documentay',
            title: 'Documentários',
            items: await basicFetch(`discover/movie?with_genres=99?&language=pt-BR&api_key=${API_KEY}`)
        },
    ];
};
export const getMovieInfo = async (movieId, type) => {
    let info = {};
    
    if (movieId) {
        switch (type) {
            case 'movie':
                info = await basicFetch(`movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
            case 'tv':
                info = await basicFetch(`tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
            default:
                throw new Error('Tipo de mídia inválido. Deve ser "movie" ou "tv".');
        }
    }

    return info;
};


