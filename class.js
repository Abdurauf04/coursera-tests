class User{
    constructor(email, name){
        this.email= email;
        this.name= name;
        this.score= 0;
    }
    login(){
        console.log(this.email, 'Just login in');
        return this;
    }
    logout(){
        console.log(this.email,'Just we log out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email,'score is now', this.score);
        return this;
    }
   
}
class Admin extends User{
    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email;
        })
    }
}


let userOne= new User('asu@mail.com' , 'Asus');
let userTwo = new User ('hiwa@gmail.com' , 'Hiwa'); 
let admin = new Admin('amin@gmail.com','ruhulo');

let users = [userOne,userTwo,admin];
admin.deleteUser(userOne);
console.log(users);