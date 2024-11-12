


const object = {
   name:"pary",
   gender:"male",
   myFuntion: function (){
    setTimeout(()=>{
        console.log(this.name)
    },1000)
   }
}

object.myFuntion();