var numbers = [1,2,3,4,5]

numbers.pop()
numbers.push(6) //Last bata add garxa
numbers.unshift(0) //Unshift le 1st ma add garxa
numbers.shift() //Shift le chai 1st index ko value remove garxa

numbers[2] = "Hi Don" //Replace garxa

//Task
const data = [1,2,3]

data.push(
    {name : "Adit",
        age :20
    })

console.log(data)

let object = {
    name:"Adit",
    age: 20
}
console.log(object.age)
delete object["age"]
console.log(object)

object.address = "Itahari"
console.log(object)

const taskData1 = [1,2,3,4,5,6,{
    name: "Adit",
    age : 21
}]

delete taskData1[6].name
console.log(taskData1)
// console.log(numbers) 

var age = 20
if (age > 18 ){
    console.log("Yeah u can vote")
}else{
    console.log("No you can't vote")
}

var temp = 1
if (temp > 30){
    console.log("It's extremeley hot...")
}else if (temp <= 20 ){
    console.log("Its warm...")
// }else if(temp <=0 ) {
//     console.log("Its extremely cold..!!!")
// }
}else {
    console.log("OK humid")
}

//For loop
// for each 
// for in 
// for of


var names = ["Adit","Tamang","Pakhrin" ]
for (i =0; i<=2; i++){
    console.log(names[i])
}
