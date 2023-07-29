const request = async () => {
    const enlace_api = await fetch(
    "https://api.nasa.gov/neo/rest/v1/feed?api_key=xlM62ih5c2Y7i4w1cx6V3OKkDX4cjDO5ybfkmeNM&start_date=2023-02-05&end_date=2023-02-05"
    );

    return enlace_api.json();
};

request().then((enlace_api) => {
    data = enlace_api.near_earth_objects
    console.log(JSON.stringify(data, null, 4))
})

