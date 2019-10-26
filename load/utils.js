require('dotenv').config();

module.exports = {
    customJs: customJs
};

function customJs(requestParams, response, context, ee, next) {
    // for reference... can add custom functions this way
    return next();
}