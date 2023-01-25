const express = require('express');
const axios = require('axios');
const router = express.Router();


router.get('/', async (req, res, next) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data)
    res.render("apiExterna", {
        apiext: response.data
    });
});

module.exports = router;