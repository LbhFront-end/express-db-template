import proxy from 'express-http-proxy';

export default proxy('http://jsonplaceholder.typicode.com', {
    //过滤器，指定类型的转发（可选）
    // filter: function (req, res) {
    //     return req.method == 'GET';
    // },
    //请求路径解析，转换一下路径（可选）
    // proxyReqPathResolver: function (req) {
    //     var parts = req.url.split('?');
    //     var queryString = parts[1];
    //     var updatedPath = parts[0].replace(/test/, 'tent');
    //     return updatedPath + (queryString ? '?' + queryString : '');
    // },
    //处理响应（可选）
    userResDecorator: function (proxyRes, proxyResData, userReq, userRes) {
        return proxyResData;
    },
    //处理请求（可选）
    proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
        // you can update headers
        // proxyReqOpts.headers['Content-Type'] = 'text/html';
        // you can change the method
        // proxyReqOpts.method = 'GET';
        return proxyReqOpts;
    },
    //处理请求body（可选）
    proxyReqBodyDecorator: function (bodyContent, srcReq) {
        return bodyContent;
    },
    //处理请求头（可选）
    userResHeaderDecorator(headers, userReq, userRes, proxyReq, proxyRes) {
        // recieves an Object of headers, returns an Object of headers.
        return headers;
    },
    //自定义错误（可选）
    proxyErrorHandler: function (err, res, next) {
        next(err);
    }
})