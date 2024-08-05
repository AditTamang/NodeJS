// The function  which goes in argument to nexr function is callback function 

//The function that accepts the callback function is higher order function


//Yoh talako sabai use bhaneko chai array ma matra ho

// forEach     
// reduce
// filter 
// map

const datas = [1,2,3,4,5]
const object = {
    name: "Adit"
}
datas.forEach(function(hello){
    console.log(hello)
})

datas.map(function(hi){
    console.log(hi)
})

datas.reduce(function(){

})

datas.filter(function(){

})

const names = ["Adit","Tamang", 20, true]

names.forEach(function(name){
    console.log(name)
})

const result = [
    {
        name : "Adit",
        age : 20
    },
    {
        name : "Papa",
        age : 52
    }
    
]


//Using for Each loop
result.forEach(function(output){
    
    console.log(output.name, output.age)
})


const tapshareData = [
    {
        text: " test",
        userID: "Adit 98",
        title : "test"
    }
]

tapshareData.forEach(function(pull){
    console.log(pull.text)
    console.log(pull.userID)
    console.log(pull.title)
})


const numbs = [1,2,3,4,5]

const squares = []

numbs.forEach(function(square){
    console.log(square * square)
    
    squares.push(square)
    // console.log(squares)
})

console.log(squares)




//Using the map function Map le chai modufy ra loop both at a time garna ma help garxa
const persons = [
    {
        firstName : "Adit",
        lastName : "Tamang"
    },
    {
        firstName : "Binod",
        lastName : "Adhikari"
    }
]

//Ans
const resultsss = persons.map(function(data){
    return{
        firstName : data.firstName,
        lastName : data.lastName,
        fullName : data.firstName + data.lastName
    }
})

console.log(resultsss)




//Question
const products = [
    {
        name : "Apple",
        price : 100
    },
    {
        name : "Banana",
        price : 50
    }
]

//Ans

const total = products.map(function(item){
    return{
        name : item.name, 
        price : item.price,
        Quantity : 10
    }
})

console.log(total)