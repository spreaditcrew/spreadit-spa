import NextRoutes from 'next-routes';

const routes = new NextRoutes()
  .add('loremIpsum', '/lorem-ipsum', 'lorem/ipsum')
  .add('loremIpsumWithId', '/lorem-ipsum/:id', 'lorem/ipsum');

// TS declarations for Next Routes are broken
export const { Link } = routes;
export const getRequestHandler = routes.getRequestHandler.bind(routes);
