
// //configuring express 

// const express = require("express"); 
// const app = express(); 
// const path = require("path");
// const hbs = require ("hbs");

// //Connecting to db 

// require("./db/conn"); 

// const port = process.env.PORT || 3000; 

// //Asking express to use a static page
// const static_path = path.join(__dirname, "../public");

// //Asking express to look for templates 
// const template_path = path.join(__dirname, "../template/views");

// //Asking express for partials
// // const partials_path = path.join(__dirname, "../template/partials");


// app.use(express.static(static_path));
// app.set("view engine", "hbs"); 
// app.set("views", template_path);
// // hbs.registerPartials(partials_path);

// //calling root/ home page
// app.get("/", (req, res) => { 
//     res.render("index");
// }); 

// //calling login page
// app.get("/login", (req, res) => { 
//     res.render("login");
// })

// //calling registration page
// app.get("/registration", (req, res) => { 
//     res.render("registration");
// })

// //which port to view 
// app.listen(port, () => { 
//     console.log(`Server is up and running at port no ${port}`); 
// })





//Rohit's Code 


//configuring express 

const express = require("express"); 
const app = express(); 
const path = require("path");
const hbs = require ("hbs");

//Connecting to db 

require("./db/conn"); 

const port = process.env.PORT || 3000; 

//Asking express to use a static page
const static_path = path.join(__dirname, "../public");

//Asking express to look for templates 
const template_path = path.join(__dirname, "../template/views");

//Asking express for partials
// const partials_path = path.join(__dirname, "../template/partials");


app.use(express.static(static_path));
app.set("view engine", "hbs"); 
app.set("views", template_path);
// hbs.registerPartials(partials_path);

//calling root/ home page
app.get("/", (req, res) => { 
    res.render("index");
}); 

//calling login page
app.get("/login", (req, res) => { 
    res.render("login");
})

//calling registration page
app.get("/registration", (req, res) => { 
    res.render("registration");
})

//which port to view 
app.listen(port, () => { 
    console.log(`Server is up and running at port no ${port}`); 
})