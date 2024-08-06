const something = [
    {
        name : "Adit Tamang"
    },
    {
        name : "Amit Pakhrin"
    }
]



const output = something.map(function(data){
    return{
        name : data.name,
        intro : "I am " + data.name
    }
})

console.log(output)


const someData = [
    {
        name : "Apple",
        price : 200 ,
        qty : 10
    },
    {
        name : "Mango",
        price : 100,
        qty : 15
    }
]

const value = someData.map(function(fruits){
    return{
        name : fruits.name,
        price : fruits.price,
        qty : fruits.qty,
        total : fruits.price * fruits.qty
    }
})

console.log(value)

const numbers = [1,2,3,4,5,6]
const outputs = numbers.filter(function(num){
    return num > 5
})
console.log(outputs)


const datas = ["Adit", "Verish", "Don"]
const outputss = datas.filter(function(name){
    return name == "Adit"
})

console.log(outputss)

const someDatas = [
    {
        name: "Apple",
        price : 200,
    },
    {
        name : "Pineapple",
        price : 160,
    },
    {
        name : "Banana",
        price : 80,
    },
    {
        name : "WaterMelon",
        price : 300,
    }
]

const datass = someDatas.filter(function(valuess){
    return valuess
})

console.log(datass)