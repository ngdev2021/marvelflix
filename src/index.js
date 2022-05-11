const { createDeployment } = require('@vercel/client');
import { EVENTS } from '@vercel/client';

async function deploy() {
  let deployment;

  for await (const event of createDeployment({
    token: process.env.TOKEN,
    path: '/dist/show-my-skills/',
  })) {
    if (event.type === 'ready') {
      deployment = event.payload;
      break;
    }
  }

  return deployment;
}
