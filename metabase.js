/**
 * Configures the metabse endpoint 
 */
const jwt = require("jsonwebtoken"),
    metabase_url = process.env.METABASE_URL || "http://localhost:3000",
    metabaseSecret = process.env.METABASE_SECRET_KEY || "60045ffc828b86f62f89bbcf0dbbf396fcd1dd5ab5484c912caf613009c78200";

module.export = {
    createDashboardUrl: (dashId) => {
        // payload
        let payload = {
            resource: {dashboard: dashId},
            params: {},
            exp: Math.round(Date.now() / 1000) + (10 * 60)
        };
        // create a token
        let token = jwt.sign(payload, metabaseSecret);
        // return the url
        return metabase_url + "/embed/dashboard/" + token + "#bordered=true&titled=true";
    },

    // function for creating a question url
    createQuestionUrl: (questionId) => {
        // payload
        let payload = {
            resource: {dashboard: dashId},
            params: {},
            exp: Math.round(Date.now() / 1000) + (10 * 60)
        };
        // create a token
        let token = jwt.sign(payload, metabaseSecret);
        // return the url
        return metabase_url + "/embed/question/" + token + "#bordered=true&titled=true";
    }
}