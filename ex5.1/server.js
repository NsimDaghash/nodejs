const UserController = require('./usersController');

UserController.deleteUserById(3).then((data)=>{
    console.log("data : ",data)
})
UserController.showAllUser().then((data)=>{
    console.log("data  :",data)

})