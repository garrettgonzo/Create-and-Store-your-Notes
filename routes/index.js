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
        res.json(JSON.parse(data))
    })
  });

router.post('/notes', (req, res) => {

  const filePath = 'db/db.json';
  
  fs.readFile("db/db.json", "utf-8", (err, data)=>{
    if(err) {
        console.log(err)
         res.status(500).json(err)
         return
    }
    const existingData = JSON.parse(data)
    const userInputedData = req.body
    const monkeID = {...userInputedData, "id": `${req.body.title}`}
    const combinedData = [...existingData, monkeID]
    fs.writeFile(filePath, JSON.stringify(combinedData), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error writing to the file');
      }
    
      console.log('Data written to db.json');
      res.status(200).send('Data written to db.json');
    });
})
});
module.exports = router;