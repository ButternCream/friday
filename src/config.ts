import 'dotenv/config';

export default {
  token: process.env.FRIDAYTOKEN as string,
  clientid: process.env.CLIENTID as string,
  port: process.env.FRIDAYPORT,
  api_endpoint: process.env.COSTAAPI as string
};
