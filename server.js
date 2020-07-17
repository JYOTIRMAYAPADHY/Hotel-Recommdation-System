const bodyParser= require("body-parser");
const express=require("express");
const session=require("express-session");
const request=require("request");
const router = express.Router();
const mongoose = require('mongoose');
const app=express();
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(__dirname+"/Main"));

app.set('view engine', 'ejs');
app.use(express.static("public"));

var sess; // global session, NOT recommended

mongoose.connect("mongodb://localhost:27017/iwpDB",{useNewUrlParser:true});


const bookingSchema = new mongoose.Schema({
  checkin:Date,
  checkout:Date,
  Adults:Number,
  NoRooms:Number
});

const Booking=mongoose.model("Booking",bookingSchema);

const book=new Booking({
  checkin:"11/05/2019",
  checkout:"11/12/2019",
  Adults:5,
  Rooms:2
})

book.save();


/*app.get('/',(req,res) => {
    sess = req.session;
    if(sess.email) {
        return res.redirect('/');
    }
    res.sendFile(__dirname+'/Main/hotels/Conrad.html');
});*/

app.get("/", (req, res) => {
  res.render('first');
})
app.get("/login",function(req,res){
  res.render("login");
});

app.get("/signup",function(req,res){
  res.render("signup");
});

app.get("/index",function(req,res){
  res.render("index");
});
app.get("/about",function(req,res){
  res.render("about");
});

app.get("/contact",function(req,res){
  res.render("contact");
});

app.get("/hotels",function(req,res){
  res.render("hotels");
});

app.get("/Conrad",function(req,res){
  res.render("Conrad");
});
app.get("/Crowne",function(req,res){
  res.render("Crowne");
});
app.get("/Hyaat",function(req,res){
  res.render("Hyaat");
});
app.get("/Ibis",function(req,res){
  res.render("Ibis");
});
app.get("/leaf",function(req,res){
  res.render("leaf");
});

app.get("/lemon",function(req,res){
  res.render("hotels");
});

app.get("/novotel",function(req,res){
  res.render("novotel");
});

app.get("/O",function(req,res){
  res.render("O");
});

app.get("/radisson",function(req,res){
  res.render("radisson");
});

app.get("/westin",function(req,res){
  res.render("westin");
});

app.get("/airport",function(req,res){
  res.render("airport");
});

app.get("/railway",function(req,res){
  res.render("railway");
});

app.get("/Pool",function(req,res){
  res.render("Pool");
});

app.get("/price",function(req,res){
  res.render("price");
});

/*app.post('/login',function(req,res){
    sess = req.session;
    sess.email = req.body.email;
    res.end('done');
});

app.get('/admin',function(req,res){
    sess = req.session;
    if(sess.email) {
        res.sendFile(__dirname+'/Main/home/index.html');
    }
    else {
      res.sendFile(__dirname+"/login/signup.html");
        //res.write('<h1>Please login first.</h1>');
        //res.end('<a href='+'/'+'>Login</a>');
    }
});*/

/*app.get('/logout',function(req,res){
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/');
    });

});*/

app.get("/logout",function(req,res){
  res.redirect("/");
});



/*app.post("/booking",function(req,res){
 var myData = new Booking(req.body);
 myData.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});*/

/*app.post("/booking",function(req,res){
 var myData = new Booking(req.body);
 myData.save()
 .then(item => {
 res.render("thanks");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});*/

app.post("/login",function(req,res){
  res.render("login");
});

app.post("/index",function(req,res){
  res.render("index");
});


app.post("/booking",function(req,res){
 var myData = new Booking(req.body);
 myData.save()
 .then(item => {
 res.render("thanks");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});

app.use('/', router);

app.listen(process.env.PORT || 3000,() => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});
