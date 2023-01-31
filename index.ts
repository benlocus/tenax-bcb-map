import { serveTls } from "https://deno.land/std/http/server.ts";

const BASE_PATH = ".";

const options = {
  hostname: "34.125.86.118",
  port: 8080,
  certFile: "./34.125.86.118.pem",
  keyFile: "./34.125.86.118-key.pem",
};

const reqHandler = async (req: Request) => {
  const filepath = BASE_PATH + new URL(req.url).pathname;

  let filesize: number;

  try {
    filesize = (await Deno.stat(filepath)).size;
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) {
      return new Response(null, { status: 404 });
    }
    return new Response(null, { status: 500 });
  }
  const body = (await Deno.open(filepath)).readable;
  return new Response(body);
};

serveTls(reqHandler, options);
