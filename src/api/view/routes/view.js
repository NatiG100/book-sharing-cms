module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/view/:id',
      handler: 'view.incrementView',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
