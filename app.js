const wrapper=document.querySelector(".sliderWrapper");
const menuItem=document.querySelectorAll(".menuItem");
const product=[
{
    id:1,
    title:"AIRFORCE",
    price:119,
    colors:[
        {
            code:"black",
            img:"./img/air2.png"
        },
        {
            code:"darkblue",
            img:"./img/air2.png",
        },
       
    ],

},
{
    id:2,
    title:"JORDAN",
    price:149,
    colors:[
        {
            code:"lightgray",
            img:"./img/jordan.png"
        },
        {
            code:"green",
            img:"./img/jordan2.png",
        },
       
    ],

},
{
    id:3,
    title:"BLAZER",
    price:109,
    colors:[
        {
            code:"lightgray",
            img:"./img/blazer.png"
        },
        {
            code:"green",
            img:"./img/blazer2.png",
        },
       
    ],

},
{
    id:4,
    title:"CRATER",
    price:129,
    colors:[
        {
            code:"black",
            img:"./img/crater.png"
        },
        {
            code:"lightgray",
            img:"./img/crater2.png",
        },
       
    ],

},
{
    id:5,
    title:"HIPPIE",
    price:99,
    colors:[
        {
            code:"grey",
            img:"./img/hippie.png"
        },
        {
            code:"black",
            img:"./img/hippie2.png",
        },
       
    ],

},

];
let chosenProduct=product[0];

const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductColor=document.querySelector(".color");
const currentProductSize=document.querySelector(".size");
const currentProductPrice=document.querySelector(".productPrice");
menuItem.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translateX($(-100*index))`;
        chosenProduct=product[index];
        currentProductTitle.textContent=chosenProduct.title;
        currentProductPrice.textContent=chosenProduct.price;
        currentProductImg.src=chosenProduct.colors[0].img;
        
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor=chosenProduct.colors[index];
        });
    });
});

currentProductColor.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=chosenProduct.colors[index].img;
    });
});

currentProductSize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSize.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor="black"
    
    });
});

