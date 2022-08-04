
//making connections 

const mongoose = require("mongoose"); 

mongoose.connect("mongodb://localhost:27017/mern_backend_db_basics", { 
    // to remove deprication warnings
    useNewUrlParser:true, 
    useUnifiedTopology:true, 
    // useCreateIndex:true, 
})
.then(() => { 
    // If connection is successfull >
    console.log(`Database connection successfully made !`); 
})
.catch((e) => { 
    //If connection is unsuccessful >
    console.log(`Connection unsuccessfull !`);
    console.log(e);
})