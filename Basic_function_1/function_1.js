function sayMyname(){
    console.log("H")
    console.log("A")
    console.log("R")
    console.log("S")
    console.log("H")
}

//sayMyname()

//function addnum(num1,num2){
  //  console.log(num1+num2)
//}

/*function addnum(num1,num2)
{
    //let result=num1+num2

    //return result

    return num1+num2

}
const result=addnum(10,5)

console.log("Result",result)
*/

function loginUsermessage(user="sam")
{
    if(!user)
    {
        console.log("please enter a username")
        return
    }
     return '${user} just logged in'
}
  //console.log(loginUsermessage("hitesh"))

  function calculateCarPrice(val1, val2, ...num1)
  {
    return num1
  }

  //console.log(calculateCarPrice(200,400,500,2000))

  const user ={
    username: "harsh",
    prices: 199
  }
   function handleObject(anyobject)
   {
    console.log('username is ${anyobject.username} and price is ${anyobject.price}');
   }

   //console.log(user)
 
  //handleObject(user)

  handleObject({
    username:"sam",
    price:399
  })

  const myNewArray=[200,400,100,600]

  function returnSecondValue(getArray){
    return getArray[1]
  }

  //console.log(returnSecondValue(myNewArray))

   console.log(returnSecondValue([200,400,500,1000]))



  
      


