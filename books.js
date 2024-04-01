const mongoose=require('mongoose');

main().then(()=>{
    console.log("sucessful");
}).catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema= mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
});

const Book = mongoose.model("Book",bookSchema);

let book1 = new Book({
    
    author:"RD sharma",
    price:400,
});

book1.save().then((res)=>{console.log(res);}).catch((err)=>{console.log(err);});