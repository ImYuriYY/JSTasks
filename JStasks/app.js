// TASK 5.1 NUM 1

// const firstDigit = document.getElementById('firstDigit')
// const secondDigit = document.getElementById('secondDigit')
// const result = document.getElementById('result')

// const goButton = document.getElementById('goButton')

// goButton.addEventListener("click", () => {
//     result.innerText = Number(firstDigit.value) + Number(secondDigit.value)
// })





// TASK 5.1 NUM 2

// const par = document.getElementById('par')
// const squareButton = document.getElementById('squareButton')

// squareButton.addEventListener("click", () => {
//     par.innerText **= 2
// })





// TASK 5.1 NUM 3

// const firstDigit = document.getElementById('firstDigit')
// const secondDigit = document.getElementById('secondDigit')
// const result = document.getElementById('result')

// const goButton = document.getElementById('goButton')

// goButton.addEventListener("click", () => {
//     result.innerText = Number(firstDigit.innerText) + Number(secondDigit.innerText)
// })





// TASK 5.1 NUM 4

// const firstDigit = document.getElementById('firstDigit')
// const secondDigit = document.getElementById('secondDigit')

// firstDigit.addEventListener("click", () => {
//     firstDigit.innerText **= 2
// })
// secondDigit.addEventListener("click", () => {
//     secondDigit.innerText **= 2
// })





// TASK 5.1 NUM 5

// const firstDigit = document.getElementById('firstDigit')
// const secondDigit = document.getElementById('secondDigit')

// firstDigit.addEventListener('focusout', () => {
//     firstDigit.value **= 2
// })

// secondDigit.addEventListener('focusout', () => {
//     secondDigit.value **= 2
// })










// TASK 5.2 NUM 1

// const result = document.getElementById('result')
// const goButton = document.getElementById('goButton')

// let myresult = 0

// goButton.addEventListener('click', () => {
//     for(let i = 1; i < 101; i++) {
//         myresult += i
//     }
//     result.innerText = myresult
//     myresult = 0
// })





// TASK 5.2 NUM 1

// Это уже было в 5.1 num 1





// TASK 5.2 NUM 3

// const parags = document.querySelectorAll('.parag')
// const goButton = document.getElementById('goButton')
// const result = document.getElementById('result')

// goButton.addEventListener("click", () => {
//     result.innerText = parags.length
// })





// TASK 5.2 NUM 4

// const text = document.getElementById('text')
// const goButton = document.getElementById('goButton')
// const result = document.getElementById('result')

// goButton.addEventListener("click", () => {
//     result.innerText = text.value.length
// })










// TASK 5.3 NUM 1

// const firstDigit = document.getElementById('firstDigit')
// const goButton = document.getElementById('goButton')
// const result = document.getElementById('result')

// let myresult = 1

// goButton.addEventListener("click", () => {
//     for(let i = 1; i < Number(firstDigit.value)+1; i++ ){
//         myresult *= i
//     }
//     result.innerText = myresult
//     myresult = 1
// })





// TASK 5.3 NUM 2

// const firstDigit = document.getElementById('firstDigit')
// const secondDigit = document.getElementById('secondDigit')
// const result = document.getElementById('result')

// const goButton = document.getElementById('goButton')

// goButton.addEventListener("click", () => {
//     Number(firstDigit.value) > Number(secondDigit.value) ? result.innerText = firstDigit.value : result.innerText = secondDigit.value
// })






// TASK 5.3 NUM 3

// const firstDigit = document.getElementById('firstDigit')
// const result = document.getElementById('result')

// const goButton = document.getElementById('goButton')

// let myresult = 0
// goButton.addEventListener("click", () => {
//     for(let i = 1; i < Number(firstDigit.value)+1; i++ ){
//         myresult += i
//     }
//     result.innerText = myresult
//     myresult = 1
// })






// TASK 5.3 NUM 4

// const text = document.getElementById('text')
// const goButton = document.getElementById('goButton')
// const result = document.getElementById('result')

// goButton.addEventListener("click", () => {
//     for(let i = text.value.length - 1; i > -1; i-- ){
//         result.innerText += text.value[i]
//     }
// })





// TASK 5.3 NUM 5

// const parags = document.querySelectorAll('.parag')

// const goButton = document.getElementById('goButton')

// goButton.addEventListener("click", () => {
//     for(let i = 0; i < parags.length; i++) {
//         parags[i].innerText = i+1
//     }
// })





// TASK 5.3 NUM 6

// Это уже было в 5.3 NUM 1










// TASK 5.4 NUM 1

// const parags = document.querySelectorAll('.parag')

// for(let i = 0; i < parags.length; i++) {
//     parags[i].addEventListener("click", () => {
//         parags[i].innerText = '!'
//     })
// }





// TASK 5.4 NUM 2

// const links = document.querySelectorAll('.mylink')
// const goButton = document.getElementById('goButton')
// const resArr = []

// goButton.addEventListener("click", () => {
//     for(let i = 0; i < links.length; i++){
//         resArr.push(links[i].getAttribute('href'))     
//     }
//     console.log(resArr)
// })





// TASK 5.4 NUM 3

// const goButton = document.getElementById('goButton')
// const result = document.getElementById('result')

// goButton.addEventListener("click", () => {
//     for(let i = 1; i !== 10; i++) {
//         result.innerText += i
//     }

// })





// TASK 5.4 NUM 4

// const goButton = document.getElementById('goButton')
// const year = document.getElementById('year')
// const month = document.getElementById('month')
// const day = document.getElementById('day')

// goButton.addEventListener("click", () => {
//     let dat = new Date()
//     year.innerText = dat.getFullYear()
//     month.innerText = dat.getMonth() + 1
//     day.innerText = dat.getDate()
// })





// TASK 5.4 NUM 5

// const link = document.getElementById('link')
// const goButton = document.getElementById('goButton')
// const result = document.getElementById('result')

// goButton.addEventListener("click", () => {
//     result.innerText = link.getAttribute('href')
// })





// TASK 5.5 NUM 1

// const text = document.getElementById('text')
// const goButton = document.getElementById('goButton')
// const year = document.getElementById('year')
// const month = document.getElementById('month')
// const day = document.getElementById('day')

// goButton.addEventListener("click", () => {
//     year.innerText = text.value.slice(0,4)
//     month.innerText = text.value.slice(5,7)
//     day.innerText = text.value.slice(8, 11)
// })





// TASK 5.5 NUM 2


// const firstDigit = document.getElementById('firstDigit')
// const secondDigit = document.getElementById('secondDigit')
// const goButton = document.getElementById('goButton')

// goButton.addEventListener("click", () => {
//     let minDigit = 0
//     let maxDigit = 0
//     Number(firstDigit.value) > Number(secondDigit.value) ? minDigit = Number(secondDigit.value) : minDigit = Number(firstDigit.value)
//     Number(firstDigit.value) < Number(secondDigit.value) ? maxDigit = Number(secondDigit.value) : maxDigit = Number(firstDigit.value)
    
//     let myresult = []

//     for(let i = minDigit; i < maxDigit + 1; i++) {
//         myresult.push(i)
//     }
//     console.log(myresult)
// })





// TASK 5.5 NUM 3

// const text = document.getElementById('text')
// const goButton = document.getElementById('goButton')
// const result = document.getElementById('result')

// goButton.addEventListener("click", () => {
//     result.innerText = text.value[text.value.length-1]
// })





// TASK 5.5 NUM 4

// const goButton = document.getElementById('goButton')
// const result = document.getElementById('result')
// let count = Number(result.innerText)
// goButton.addEventListener("click", () => {
//     count++
//     result.innerText = count
// })





// TASK 5.5 NUM 5

// const text = document.getElementById('text')
// const result = document.getElementById('result')

// text.addEventListener('focusout', () => {
//     result.innerText = text.value
// })



























