import fastify from 'fastify';

const server = fastify();

server.get('/', async (request, reply) => {
    return { message: 'Hello, world!' };
});

const start = async () => {
    try {
        await server.listen(3000);
        console.log('Server is running on port 3000');
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

start();
