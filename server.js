const express =  require("express");
const app = express();

app.set('view engine','ejs');

//static files
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));

const blogs = [
    {title: 'Lenovo Legion Slim 7 Review',snippet:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eveniet ipsa incidunt molestias eligendi tempore hic a ipsum necessitatibus eum fugiat, voluptatem, at quisquam culpa error maxime fuga. Hic, repudiandae.'},
    {title: 'Surfshark VPN Review',snippet:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eveniet ipsa incidunt molestias eligendi tempore hic a ipsum necessitatibus eum fugiat, voluptatem, at quisquam culpa error maxime fuga. Hic, repudiandae.'},
    {title: 'Sony WF-1000XM4 Review: The Best Flagship TWS?',snippet:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eveniet ipsa incidunt molestias eligendi tempore hic a ipsum necessitatibus eum fugiat, voluptatem, at quisquam culpa error maxime fuga. Hic, repudiandae.'}

]

app.get('/',(req,res) => {
    res.render('index',{title:'Home',blogs});
});

app.get('/about',(req,res) => {
    res.render('about',{title:'About'});
});

app.get('/blogs/create',(req,res) => {
    res.render('create',{title:'New Blog'});
});

app.post('/create-blog',(req,res)=>{
    console.log(req.body)
    let title = req.body.title;
    let snippet = req.body.snippet;
    let body = req.body.body;
    blogs.push({
        title:title,snippet:snippet,
    })
    res.redirect('/')
})

app.all('*',(req,res) => {
    res.status(404).send('<h1>404 Resource not found</h1>')
});


app.listen(3000,()=>{
    console.log("server is listening to http://localhost:3000");
});
