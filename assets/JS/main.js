let next = document.querySelector("#Next");
let back = document.querySelector("#Back");

let img = document.querySelector("#img");
let images = [
  "../img/img1.jpg",
  "../img/img2.jpg",
  "../img/img3.jpg",
  "../img/img4.jpg",
  "../img/img5.jpg",
];
let num = 0;
let interval;

next.addEventListener("click", function () {
  num++;
  if (num >= images.length) {
    num = 0;
    img.src = images[num];
  } else {
    img.src = images[num];
  }
});

back.addEventListener("click", function () {
  num--;
  if (num < 0) {
    num = images.length - 1;
    img.src = images[num];
  } else {
    img.src = images[num];
  }
});



let phone1 = document.querySelector("#phone1"); 
let phone2 = document.querySelector("#phone2"); 
let phone3 = document.querySelector("#phone3"); 
let phone4 = document.querySelector("#phone4"); 

let Next = document.querySelector("#next");
let Back = document.querySelector("#back");


let sets = [
    [
        "../img/sec1.jpg",
        
        "../img/sec2.jpg",
        "../img/sec3.jpg",
        "../img/sec4.jpeg"
    ],
    [
        "../img/sec5.jpg", 
        "../img/sec6.jpg",
        "../img/sec7.jpg",
        "../img/sec10.jpg"
    ],
    [
        "../img/sec9.jpg",
        "../img/sec10.jpg",
        "../img/sec14.jpg",
        "../img/sec12.jpg"
    ],
    [
        "../img/sec10.jpg",
        "../img/sec12.jpg",
        "../img/sec13.jpeg",
        "../img/sec14.jpg"
    ]

];

let setIndex = 0;

function updateImages() {
    phone1.src = sets[setIndex][0];
    phone2.src = sets[setIndex][1];
    phone3.src = sets[setIndex][2];
    phone4.src = sets[setIndex][3];
}

Next.addEventListener("click", function() {
    setIndex++; 
    if (setIndex >= sets.length) {
        setIndex = 0;
    }
    updateImages(); 
});


Back.addEventListener("click", function() {
    setIndex--; 
    if (setIndex < 0) { 
        setIndex = sets.length - 1;
    }
    updateImages(); 
});



let buttons=document.querySelectorAll(".button")

buttons.forEach((button)=>{
  button.addEventListener("mouseenter",function(){
    let image=button.closest(".overflow-hidden").querySelector(".img")
    image.style.transition="transform 1s ease-in"
    image.style.transform="scale(1.2)"
  })
  button.addEventListener("mouseleave", function() {
    let image = button.closest('.overflow-hidden').querySelector('.img');
     image.style.transform = "scale(1)"; // Reset the scale
   });
})





