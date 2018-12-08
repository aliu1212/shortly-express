

const parseCookies = (req, res, next) => {
    let cookie_string = req.headers["cookie"];
    console.log(cookie_string)
};

module.exports = parseCookies;