// let cars = ['opel', 'volvo', 'bmw'];
// console.log(cars[2])

// let person = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     age: 50,
//     eyeColor: 'blue'

// }
// console.log(person.firstName + " " + person.age)

// let num1
// num1 = 5
// document.write("num1 is type of:" + typeof (num1))


// person = null
// console.log(typeof (person))

// let x = 5
// let y = 2
// let z = x + y
// console.log("z=" + z)

// x = 7
// y = ++x
// console.log("y=" + y)

// x = "3+(5*2+6)/4"
// console.log(x + " = " + eval(x))

// const myFunction = () => {
//     let x = 5
//     document.getElementById("demo").innerHTML = (x == 8)
// }

// const myFuncitonTime = () => {
//     let hours = new Date().getHours()
//     let greeting
//     if (hours < 18) {
//         greeting = 'good afternoon'
//     } else {
//         greeting = 'good evening'
//     }
//     document.getElementById("timedemo").innerHTML = greeting
// }

// let t, name
// t = 'What is your name?'
// name = prompt(t)
// if (name == '') {
//     document.write("we don't know your name")

// } else {
//     document.write("\n " + "your name is " + name)
// }

// let arr = ['JavaScript', 'Java', 'Python']
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// function sayHello(name){
//     return "Hello, " + name + '!'
// }
// alert(sayHello('Иван'))

let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
}
function currtentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i
    let slides = document.getElementsByClassName("slideshow")
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slideIndex - 1].style.display = "block"
}