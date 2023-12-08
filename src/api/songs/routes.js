const routes = (handler) => [
    {
        method: 'POST',
        path: '/songs',
        handler: handler.postSong,
    },
    {
        method: 'GET',
        path: '/songs',
        handler: handler.getSongs,
    },
    {
        method: 'GET',
        path: '/songs/{songId}',
        handler: handler.getSongById,
    },
    {
        method: 'PUT',
        path: '/songs/{songId}',
        handler: handler.putSongById,
    },
    {
        method: 'DELETE',
        path: '/songs/{songId}',
        handler: handler.deleteSongById,
    },
];

module.exports = routes;
