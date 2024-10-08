import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const contentType = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

const port = 3000;

http
  .createServer(async (req, res) => {
    const { pathname } = url.parse(req.url);
    let filename = pathname.substring(1);
    if (pathname === "/") {
      filename = "index.html";
    }
    const type = contentType[path.extname(filename)];
    res.writeHead(200, { "Content-Type": type });
    if (type.includes("image")) {
      const img = await fs.readFile(filename);
      res.write(img, "hex");
    } else {
      const content = await fs.readFile(filename, "utf8");
      res.write(content);
    }
    res.end();
  })
  .listen(3000, () => console.log(`Listen server on port ${port}`));
