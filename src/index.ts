import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import { schema } from './schema';
import {context} from './context';

export const server = new ApolloServer({
    schema,
    context
});

const startServer = async () => {
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello world!')
    })

    await server.start();
    server.applyMiddleware({app});

    const port = 3000;

    app.listen({port}, () => {
        console.log(`🚀  Server ready on port ${port}`);
    });
};

startServer();

