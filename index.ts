import { serve } from "https://deno.land/std/http/mod.ts";

const BASE_PATH = ".";

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

serve(reqHandler, { port: 8080 });
