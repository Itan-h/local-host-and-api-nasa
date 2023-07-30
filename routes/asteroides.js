var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ message: 'pruebita' });
});


router.get('/search', (req,res) =>{
  start=req.query.start
  end=req.query.end
  key=req.query.key
  console.log(start);
  console.log(end);
  console.log(key);

  const request = async () => {
    const enlace_api = await fetch(
    "https://api.nasa.gov/neo/rest/v1/feed?"+"api_key="+key+"&start_date="+start+"&end_date="+end
    );

    return enlace_api.json();
  };

  request().then((enlace_api) => {
      data = enlace_api.near_earth_objects
      console.log(JSON.stringify(data, null, 4))
  })

  res.json(data)
});


// console.log(otro)


module.exports = router;

