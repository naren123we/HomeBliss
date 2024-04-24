const mongoose=require("mongoose");

const UserSchema =new mongoose.Schema({
email:{
    type: String,
    required:true,

},
name:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:true
},
image:{
    type:String,
},
bookedVisits: {
    type: [mongoose.Schema.Types.Mixed],
    default: []
},
favResidenciesID: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Residency'
},
ownedResidencies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Residency'
}]
})
const User = mongoose.model('User', UserSchema);

module.exports = User;