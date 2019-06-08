> 创建一个简单的服务器

```
let http = require ('http');
http
  .createServer ((req, res) => {
    res.writeHead (200, {
      'Content-Type': 'text/plain',
    });
    res.end ('hello shanks');
  })
  .listen (3000, 'localhost');
```

> supervisor 热启动
