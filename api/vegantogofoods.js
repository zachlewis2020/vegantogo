
import options from "./vegantogo.json";

module.exports = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(options));
}