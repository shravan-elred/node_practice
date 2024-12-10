// import http from 'http';
// import * as fs from 'fs';
// import url from 'url';
import express from 'express';

const port = 8000;

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello from Home page');
});

app.get('/about', (req, res) => {
    return res.send('Hello from About page');
});

app.get('/hello', (req, res) => {
    return res.send(`Hello ${req.query.name ?? 'world'}!`);
});

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`)
});

// function myHandler(req, res) {
//     if (req.url === '/favicon.ico') return res.end();
//     const log = `${Date.now()} | ${req.method} | ${req.url} | New Request received\n`;
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);

//     fs.appendFile('log.txt', log, () => {
//         switch (myUrl.pathname) {
//             case '/': res.end('HomePage');
//                 break;
//             case '/about':
//                 const userName = myUrl.query.myname;
//                 res.end(`Hello ${userName}!`);
//                 break;
//             case '/search':
//                 const q = myUrl.query.q;
//                 res.end(`Here are you results for ${q}`);
//                 break;
//             case '/signup':
//                 if (req.method === 'GET') res.end("This is a signup form");
//                 else res.end("Signup success");
//             default: res.end('404 not found');
//                 break;

//         };
//     });
// }

// const server = http.createServer(app);

// server.listen(port, host, () => {
//     console.log(`Server running at http://${host}:${port}`)
// });


