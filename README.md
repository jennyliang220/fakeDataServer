# FakeDataServer 返回假数据服务

A Node server respond to GET request, returning json with text and image link, powered by Express.
启动一个Node Express服务，响应GET请求，返回包含图片和文字的JSON数据。

## Getting Started 使用方法

```
npm install;
DEBUG=myapp npm start
```

Now your http://0.0.0.0/mip is responding to GET request.
现在向 http://0.0.0.0/mip 发请求，能够得到数据了。

## Manipulate With Data 修改数据
The json file is in `/public/json/infinite.json`, edit and you'll get customized data.
数据存放在`/public/json/infinite.json`，修改后重新启动，就可以获取新数据了。
