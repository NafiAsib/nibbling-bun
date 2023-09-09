import figlet from "figlet";

const server = Bun.serve({
  development: Bun.env.BUN_ENV === "development",
  fetch() {
    const body = figlet.textSync("YO BUN!");
    return new Response(body);
  },
  port: process.env.PORT,
});

console.log(`Listening on http://localhost:${server.port} ...`);
