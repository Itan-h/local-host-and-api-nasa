var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) =>{
  start=req.query.start
  end=req.query.end
  key=req.query.key
  if(start==undefined){
    start=''
  }
  if(end==undefined){
    end=''
  }
  if(key!=process.env.KEY){
    res.status(511).send('Network Authentication Required')
  }

  const request = async () => {
    const enlace_api = await fetch(
    "https://api.nasa.gov/neo/rest/v1/feed?"+"api_key="+key+"&start_date="+start+"&end_date="+end
    );

    return enlace_api.json();
  };

  request().then((enlace_api) => {
      data = enlace_api.near_earth_objects
  })

  res.json(data)
});

module.exports = router;