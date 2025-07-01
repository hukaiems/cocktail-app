import express from 'express';
import axios from 'axios';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// it give the correct __dirname
const __filename = fileURLToPath(import.meta.url); //import fullpath
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.static(path.join(__dirname, '..', 'public')));

// tell express to handle form bodies
app.use(express.urlencoded({extended: true}));

let categories = [];
axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`).then(res => {
    categories = res.data.drinks;
});


app.get('/', async (req, res)=> {
    try{
        // console.log(categories);
        res.render('index', {categories, drinks: []});
    } catch(error){
        console.log(error.message);
        res.render('index', {categories, drinks: []});
    }
});

app.post('/choose', async (req, res)=> {
    try{
        const category = req.body.chosenCategory;
        // remember the https://
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        const drinks = response.data.drinks;
        // console.log(JSON.stringify(response.data.drinks[0]));
        res.render('index', {categories, drinks});
    } catch(error){
        console.log("Error", error.message);
    }
});

app.listen(port, ()=> {
    console.log(`Listening in port: ${port}`);
});