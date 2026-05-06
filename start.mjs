import { createServer } from "http";
import { request } from "http";
import { spawn } from "child_process";

const vite = spawn("npx", ["vite", "--port", "5000"], {
  stdio: "inherit",
  env: { ...process.env, PORT: "5000" },
});

setTimeout(() => {
  createServer((req, res) => {
    const opts = {
      hostname: "localhost",
      port: 5000,
      path: req.url,
      method: req.method,
      headers: { ...req.headers, host: "localhost:5000" },
    };
    const proxy = request(opts, (r) => {
      res.writeHead(r.statusCode, r.headers);
      r.pipe(res);
    });
    proxy.on("error", () => {
      res.writeHead(502);
      res.end("Starting...");
    });
    req.pipe(proxy);
  }).listen(18709, "0.0.0.0", () => {
    console.log("Proxy listening on port 18709 → 5000");
  });
}, 4000);

vite.on("exit", (code) => process.exit(code ?? 0));
