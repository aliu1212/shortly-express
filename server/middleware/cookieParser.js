

const parseCookies = (req, res, next) => {
    let cookie_string = req.headers["cookie"];
    let cookie_obj = {};
   // console.log(typeof cookie_string)
   if (typeof cookie_string !== "undefined") {
    cookie_array = cookie_string.split("; ")

    //console.log(cookie_array);
    for (let i=0; i<cookie_array.length; i++) {
      let key = cookie_array[i].split("=")[0]
      //console.log("key", key);
      let value = cookie_array[i].split("=")[1];
      //console.log("value", value);
      cookie_obj[key] = value;
    }
  }
  req.cookies = cookie_obj;
  next()
};

module.exports = parseCookies;