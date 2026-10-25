// Local dev server (no dependencies). Run: node --env-file=.env server.js
import http from "node:http";
import { readFile } from "node:fs/promises";
import handler from "./api/translate.js";

const PORT = process.env.PORT || 3000;

http.createServer(async (req, res) => {
  if (req.url.startsWith("/api/translate")) {
    let raw = "";
    for await (const chunk of req) raw += chunk;
    try { req.body = raw ? JSON.parse(raw) : {}; } catch { req.body = {}; }
    res.status = (code) => { res.statusCode = code; return res; };
    res.json = (obj) => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(obj));
    };
    return handler(req, res);
  }
  try {
    const html = await readFile(new URL("./index.html", import.meta.url));
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(html);
  } catch {
    res.statusCode = 404;
    res.end("Not found");
  }
}).listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));
