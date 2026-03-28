import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import dbConn from './backend/db/dbConn.js';
import seedProducts from './backend/helper/seedProducts.js';
import Product from './backend/models/Product.js';

const app = express();

app.use(cors())
dotenv.config({})
dbConn()
// seedProducts()

app.get('/api/products',async(req,res)=>{
    try {
        const products=await Product.find()
        res.status(200).json(products)
    } catch (error) {
        console.log('error in fetching products',error.message)
    }
})

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));
app.get(/.*/, (req, res) =>{
     res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
});

const port=process.env.PORT||5000
app.listen(port, () => {
    console.log('Server running on port ',port)
});