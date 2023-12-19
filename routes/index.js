const router = require('express').Router();
const fs = require('fs');
// const util = require('util');

// const readFromFile = util.promisify(fs.readFile);

router.get('/notes', (req, res) => {
    
    fs.readFile("db/db.json", "utf-8", (err, data)=>{
        if(err) {
            console.log(err)
             res.status(500).json(err)
             return
        }
        console.log(JSON.parse(data))
        res.json(JSON.parse(data))
    })
    // readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
  });
//console.log(req.body)
module.exports = router;