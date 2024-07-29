// function add(){
//     console.log(1+2)
// }

// add()

// function add2(a,b){
//     console.log(a+b)
// }
// add2(1,2)
// add2(2,3)

// function mul(x,y){
//     console.log(x*y)
// }
// mul(6,6)

// function sub(c,d){
//     console.log(c-d)
// }

// sub(9,6)

const add = () =>{
    console.log(1+5)
}

add()

let add2 = (a,b) =>{
    console.log(a+b)
}

add2(1,9)

let mul = (x,y) => {
    console.log(x*y)
}

mul(3,9)

const divide = (g,h) => {
    console.log(g/h)

}

divide(2,5)


var animal = ["Cat", "DOG","cow"]


function pushAnimal(a){
    animal.push(a)
}
pushAnimal("Lion")
pushAnimal("tiger")
console.log(animal)

animal.pop("tiger")

console.log(animal)

function popAnimal(b){
    animal.pop(b)
}
popAnimal("tiger")

console.log(animal)


const data = [1,2,3,4,5]

// function output(a){
//     data.push(a)
// }

// output(5)
// console.log(data)


function output(a){
    console.log(data[4])
}
output()

const data2 = [ 
    {
        name : "Adit",
        age : 20
    },
    {
        name: "Verish",
        age: 20
    }
]

function name(){
    console.log(data2[1].name)
    console.log(data2[1].age)
}
name()


const age = 12
function vote(a){
    console.log(age)
    if (age < 18)
    {
        console.log("you can't vote")
    }
    else{
        console.log("you can vote")
    }
    
}

vote(age)
