const express = require('express');
const app = express();
const pg = require("pg");
const cors = require('cors');
const port= process.env.port || 1124; 
app.use(cors());

const client = new pg.Pool({
    /*user: 'postgres',
    password: 'wkd4829',
    host: 'localhost',
    port: 5432,
    database: 'postgres',*/
    user: "intern_db_5lx4_user",
    host: "dpg-csu2o6lumphs738kvg9g-a.oregon-postgres.render.com",
    password: "jVWd305lnaZjRpdgBCN5dvD8EbwtZdz3",
    port: 5432,
    database: "intern_db_5lx4",
    ssl: true,
});

app.get('/menu', async (req, res)=>{
    await client.connect();
    const result = await client.query("SELECT fruit_id, fruit_img FROM public.fruit_world");
    res.send(result.rows);
});

app.listen(1124, ()=>{
    console.log('connected on fort 1124');
});