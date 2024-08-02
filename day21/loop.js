const days = [ "Sunnday", " Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]

//Looop for using for loop

for(var i =0 ; i<5 ; i++){
    console.log(i)

}



//"For of" loop using specialized for the  Array
for (let hello of days){
    console.log(hello)
}

const data = [1,2,3,4,5,6,7,8,9,10,11]

//Using for of loop

for(let value of data){
    console.log(value)
}

var data2 = [
    {
        name : "Adit",
        age: 20
    },
    {
        name : "Don",
        age : 10
    }
]
//For of loop

// for(let num of data2){
//     console.log(num.name, num.age)
// }

//For each loop

data2.forEach(function(cal){
    console.log(cal)
})



//Loop data3 ko arrray bhitrako datta draw draw garne ho
const data3 = {
    days: ["Sunday", "Monday", "Tuesday"]
}
for(let days of data3.days){
    console.log(days)
}

//For each loop
const datas = [1,2,3,4,5,6,7]
datas.forEach(function(data){
    console.log(data)
})




