module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/download/:id',
     handler: 'download.incrementDownload',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
