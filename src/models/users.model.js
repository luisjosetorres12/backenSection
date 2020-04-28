const mongoose = require('mongoose')
const {Schema} = mongoose
const {compareSync,hashSync,genSaltSync} = require('bcryptjs')

const UserChema = new Schema({
  name: {type:String, required:true},
  username: {type:String, required:true},
  password: {type:String, required:true}
})

UserChema.methods.toJSON = function(){
  let user = this.toObject()
  delete user.password
  return user
}

UserChema.methods.comparePassword = function(password){
  return compareSync(password, this.password)
}

UserChema.pre('save',async function(next){
  const user = this
  if(!user.isModified('password')){
    return next()
  }

  const salt = genSaltSync(10)
  const hashedPassword = hashSync(user.password, salt)
  user.password = hashedPassword
  next()
})

module.exports = mongoose.model('user',UserChema)