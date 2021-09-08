// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
const scrape = require("./scrape");

fastify.get("/", async (request, reply) => {
  const response = await scrape(request.query.url);
  return { response };
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
