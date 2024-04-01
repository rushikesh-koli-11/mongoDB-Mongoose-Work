const mongoose=require('mongoose');

main().then(()=>{
    console.log("sucessful");
}).catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User=mongoose.model("User",userSchema);

// const user2=new User({
//     name:"eve",
//     email:"eve@gmail.com",
//     age:22,
// });

// user2.save().then((res) =>{
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.insertMany([
//     {name:"tony",email:"tony@gmail.com",age:24},
//     {name:"sony",email:"sony@gmail.com",age:23},
// ]).then((res)=>{
//     console.log(res);
// })

// User.findById("660a9fa7944c6bcf249c9729").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//User.findByIdAndUpdate({_id:"660a9fa7944c6bcf249c9729"},{age:27},{new:true}).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);});
//User.updateMany({age:{$gt:23}},{age:25}).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);});

User.deleteOne({name:"adam"}).then((res)=>{console.log(res)});