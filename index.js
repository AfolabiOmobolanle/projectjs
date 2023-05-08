let btn = document.querySelector("#quotes");
let btn1 = document.querySelector("#text");

const select = [
"fear men!!!!",
"You are the shuckiest shuck faced shuck in the world!",
"You will face many defeats in life, but never let yourself be defeated",
"The greatest glory in living lies not in never falling but in rising every time we fall",
"In the end it's not the years in your life that count",
"Never let the fear of striking out keep you from playing the game"

]

btn.addEventListener('click',function(){
    text.textContent = select[Math.floor(Math.random()*select.length)]
})