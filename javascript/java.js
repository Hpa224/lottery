
let numbers=[]
let div = $("#numbers")

let number = (min,max) => {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
   }


let generator = () => {

   for (let i = 1; i <= 9; i++) {
      numbers.push(number(1,10))
      }
   // console.log(numbers)

   div.prepend(`<p class=chosen>`)
   $(".chosen").text(numbers)

   if (numbers.length === 9) {
      numbers=[]
      console.log(numbers)
      }
   }

   for (let i = 1; i <= 10; i++) {
         generator()
   }