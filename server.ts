import next from 'next';
import express from 'express';
import dotenv from 'dotenv';

import { getRequestHandler } from './src/config/routes';

function isDevelopmentEnvironment(): boolean {
  return process.argv.some(
    (value): boolean => {
      return value === '--dev';
    },
  );
}

// Load .env into `process.env`
dotenv.config();

const app = next({
  dev: isDevelopmentEnvironment(),
  dir: 'src',
});

app.prepare().then(
  (): void => {
    express()
      .use(getRequestHandler(app))
      .listen(process.env.SPREADIT_PORT);
  },
);
