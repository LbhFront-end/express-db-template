import httpProxy from "lib/httpProxy"

const posts = async(req, res, next) => {
    return await httpProxy(req, res, next)
}
export {
    posts
}