import fastify from "fastify";

const app = fastify();

app.get("/", async (request, reply) => {
    return { hello: "world1" };
});

app.post("/", async (request, reply) => {
    return { hello: "world" };
});


app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
    console.log("Server is running");
})