// const mongoose =require("mongoose");
// const mongoURI ='mongodb+srv://gofood:mern@cluster0.md3fwnf.mongodb.net/gofoodmern?retryWrites=true&w=majority'
// const mongoDB= async() => {
//     mongoose.connect(mongoURI, {
//          useNewUrlParser:true,
//          useUnifiedTopology:true,
//     })
//     .then(console.log("DB Connected succesfully......")
//         const fetched_data = await mongoose.connect.db.collection("food_items");
//         fetched_data.find({}).toArray(function(err,data){
//             if(err) console.log(err);
//             else console.log(data);
//         })
    
    
//     )
//     .catch( (error) =>{
//         console.log("DB facing issues ");
//         console.log(error);
//         process.exit(1);
//     })
// };
// module.exports = mongoDB;








const mongoose = require("mongoose");
const mongoURI = 'mongodb+srv://gofood:mern@cluster0.md3fwnf.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected successfully......");

    // Access a specific collection and fetch data
    const fetched_data = mongoose.connection.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    const foodCategory = mongoose.connection.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();


    global.food_items=data;
    global.foodCategory=catData;

    console.log();
  }
   catch (error) {
    console.log("DB facing issues ");
    console.error(error);
    process.exit(1);
  }
};

module.exports = mongoDB;
