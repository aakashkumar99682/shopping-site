// nav bar open
const loaction = document.querySelector (".location-dropdown");
const rotate = document.getElementById("over02");

loaction.onmouseover = ()=>{
    rotate.classList.add("hover02");
};

loaction.onmouseout =()=>
{
    rotate.classList.remove("hover02");
}

const  language = document.querySelector(".language-dropdown");
const rotate01 = document.getElementById("over01")

 language.onmouseover = ()=>
 {
    rotate01.classList.add("hover02");
 }
 language.onmouseout =()=>
 {
    rotate01.classList.remove("hover02");
 }

 document.querySelector('.open-menubar').addEventListener('click', ()=>{
        document.querySelector('.menubar').classList.add('active');
 })

 document.querySelector('.close-menubar').addEventListener('click',()=>{
    document.querySelector('.menubar').classList.remove('active');
 })
// nav bar close


// banner part open
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.carousel-indicator');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none' ;
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function showPreviousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function autoplay() {
    setInterval(showNextSlide, 3000); // Adjust the interval as needed
  }

  prevBtn.addEventListener('click', showPreviousSlide);
  nextBtn.addEventListener('click', showNextSlide);
  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => showSlide(i));
  });

  showSlide(currentIndex);
  autoplay();
});

//   banner part close




// card part open 
let value = 1;
const card_next =document.getElementById("card_next");
const card_prev = document.getElementById("card_prev");
const card_header02 = document.querySelector(".card_header02");
if (window.innerWidth < 600)
 {
  card_header02.classList.remove("move");
 }


function updateValue() {
  if (window.innerWidth < 600) {
    card_header02.style.transform = `translateX(-${value* 100}%)`;
  }
}


let card_next01 = function() {
  card_header02.classList.add("move");
  card_next.classList.add("background");
  card_prev.classList.remove("background");

  if (value < 4) {
    value++;
    updateValue();
  }

   
};

let card_prev01 = function() {
  card_header02.classList.remove("move");
  card_prev.classList.add("background");
  card_next.classList.remove("background");

  if (value > 1) {
    value--;
    updateValue();
  }

};


let a = card_next.addEventListener('click', card_next01 );
card_prev.addEventListener('click', card_prev01);
// card part close




// category part open
const fashion = document.getElementById("fashion");
const groceries = document.getElementById("groceries");
const baby = document.getElementById("baby");
const mobile = document.getElementById("mobile");
const media = document.getElementById("media");

let category_image = document.getElementById("category_image");


fashion.onclick =()=>
{
    category_image.style.transform = "translateX(-0%)";
}
groceries.onclick =()=>
{
  category_image.style.transform ="translateX(-20%)";
}
baby.onclick =()=>
{
  category_image.style.transform ="translateX(-40%)";
}
mobile.onclick =()=>
{
  category_image.style.transform ="translateX(-60%)";
}
media.onclick =()=>
{
  category_image.style.transform ="translateX(-80%)";
}

// category01 part open
const fashion01 = document.getElementById("fashion01");
const groceries01 = document.getElementById("groceries01");
const baby01 = document.getElementById("baby01");
const mobile01 = document.getElementById("mobile01");
const media01 = document.getElementById("media01");

let category_image01 = document.getElementById("category_image01");


fashion01.onclick =()=>
{
    category_image01.style.transform = "translateX(-0%)";
}
groceries01.onclick =()=>
{
  category_image01.style.transform ="translateX(-20%)";
}
baby01.onclick =()=>
{
  category_image01.style.transform ="translateX(-40%)";
}
mobile01.onclick =()=>
{
  category_image01.style.transform ="translateX(-60%)";
}
media01.onclick =()=>
{
  category_image01.style.transform ="translateX(-80%)";
}



const border = document.querySelectorAll(".border");

function Addborder(event) {
    border.forEach(border => {
    border.classList.remove('title_border' , 'underline');
    
  })
  event.target.classList.add('title_border');
}

 border.forEach(border =>{
  border.addEventListener('click', Addborder);
});

// category part close
const recommended_slider = document.querySelector('.recommended_slider');
const recommended_cards = document.querySelectorAll('.recommended_card');
const recommended_prevBtn = document.querySelector('.recommended_prev');
const recommended_nextBtn = document.querySelector('.recommended_next');
let recommended_counter = 0;
let recommended_cardWidth = recommended_cards[0].offsetWidth + 20;

function recommended_updateSliderPosition() {
  if(recommended_counter > 4){
    recommended_slider.style.transform = `translateX(-${4 * 268}px)`;
}
else
{
  recommended_slider.style.transform = `translateX(-${recommended_counter * recommended_cardWidth}px)`;
}
  }
    



recommended_prevBtn.addEventListener('click', () => {
    if (recommended_counter > 0) {
        recommended_counter--;
        recommended_updateSliderPosition();
    }
});

recommended_nextBtn.addEventListener('click', () => {
    if (recommended_counter < recommended_cards.length - 1) {
        recommended_counter++;
        recommended_updateSliderPosition();
    }
});

// color change and price program part open
function changeColor01(color) {
  let textColor01, imageUrl01, price01; 
  let EMI01;
  let save01;
  let emi01;

  if (color === 'black') {
    textColor01 = 'black';
    imageUrl01 = 'https://images.samsung.com/is/image/samsung/p6pim/in/ls24c360eawxxl/gallery/in-essential-s3-s36c-27inch-round-stand-456710-ls24c360eawxxl-thumb-536836517?$216_216_PNG$';
    price01 = '15';
    EMI01 ='152';
    save01 = '400';
    emi01 = '6656';
  } else if (color === 'white') {
    textColor01 = 'white';
    imageUrl01 = 'https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dax1tl/gallery/in-front-loading-washer-ww10t534daws1-374541-374541-ww80t504dax1tl-thumb-538070793?$216_216_PNG$';
    price01 = '20';
    EMI01 ='120';
    save01 = '900';
    emi01 = '5787';
  } else if(color === 'Yellow') {
    textColor01 = 'Yellow';
    imageUrl01 = 'https://images.samsung.com/is/image/samsung/p6pim/in/ls22c310eawxxl/gallery/in-essential-s3-27s31c-453765-ls22c310eawxxl-thumb-536576406?$216_216_PNG$';
    price01 = '1600';
    EMI01 ='100';
    save01 = '700';
    emi01 = '548';
  }
  else {
    textColor01 = 'white'; 
    imageUrl01 = 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-r390nzsainu/gallery/in-galaxy-fit3-r390-sm-r390nzsainu-thumb-539989193?$216_216_PNG$';
    price01 = '1200';
    EMI01 ='300';
    save01 = '300';
    emi01 = '361';
  }

  document.getElementById('text01').innerHTML = textColor01;
  document.getElementById('image01').src = imageUrl01;
  document.getElementById('price01').textContent = price01;
  document.getElementById('delete01').textContent = EMI01;
  document.getElementById('save01').textContent = save01;
  document.getElementById('Emi01').textContent =emi01;
}


function changeColor02(color) {
  let textColor02, imageUrl02, price02; 
  let EMI02;
  let save02;
  let emi02;

  if (color === 'black') {
    textColor02 = 'black';
    imageUrl02 = 'https://images.samsung.com/is/image/samsung/p6pim/in/ls24c360eawxxl/gallery/in-essential-s3-s36c-27inch-round-stand-456710-ls24c360eawxxl-thumb-536836517?$216_216_PNG$';
    price02 = '15';
    EMI02 ='152';
    save02 = '400';
    emi02 = '6656';
  } else if (color === 'white') {
    textColor02 = 'white';
    imageUrl02 = 'https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dax1tl/gallery/in-front-loading-washer-ww10t534daws1-374541-374541-ww80t504dax1tl-thumb-538070793?$216_216_PNG$';
    price02 = '20';
    EMI02 ='120';
    save02 = '900';
    emi02 = '5787';
  } else if(color === 'Yellow') {
    textColor02 = 'Yellow';
    imageUrl02 = 'https://images.samsung.com/is/image/samsung/p6pim/in/ls22c310eawxxl/gallery/in-essential-s3-27s31c-453765-ls22c310eawxxl-thumb-536576406?$216_216_PNG$';
    price02 = '1600';
    EMI02 ='100';
    save02 = '700';
    emi02 = '548';
  }
  else {
    textColor02 = 'white'; 
    imageUrl02 = 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-r390nzsainu/gallery/in-galaxy-fit3-r390-sm-r390nzsainu-thumb-539989193?$216_216_PNG$';
    price02 = '1200';
    EMI02 ='300';
    save02 = '300';
    emi02 = '361';
  }

  document.getElementById('text02').innerHTML = textColor02;
  document.getElementById('image02').src = imageUrl02;
  document.getElementById('price02').textContent = price02;
  document.getElementById('delete02').textContent = EMI02;
  document.getElementById('save02').textContent = save02;
  document.getElementById('Emi02').textContent =emi02;
}


function changeColor03(color) {
  let textColor03, imageUrl03, price03; 
  let EMI03;
  let save03;
  let emi03;

  if (color === 'black') {
    textColor03 = 'black';
    imageUrl03 = 'https://images.samsung.com/is/image/samsung/p6pim/in/ls24c360eawxxl/gallery/in-essential-s3-s36c-27inch-round-stand-456710-ls24c360eawxxl-thumb-536836517?$216_216_PNG$';
    price03 = '15';
    EMI03 ='152';
    save03 = '400';
    emi03 = '6656';
  } else if (color === 'white') {
    textColor03 = 'white';
    imageUrl03 = 'https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dax1tl/gallery/in-front-loading-washer-ww10t534daws1-374541-374541-ww80t504dax1tl-thumb-538070793?$216_216_PNG$';
    price03 = '20';
    EMI03 ='120';
    save03 = '900';
    emi03 = '5787';
  } else if(color === 'Yellow') {
    textColor03 = 'Yellow';
    imageUrl03 = 'https://images.samsung.com/is/image/samsung/p6pim/in/ls22c310eawxxl/gallery/in-essential-s3-27s31c-453765-ls22c310eawxxl-thumb-536576406?$216_216_PNG$';
    price03 = '1600';
    EMI03 ='100';
    save03 = '700';
    emi03 = '548';
  }
  else {
    textColor03 = 'white'; 
    imageUrl03 = 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-r390nzsainu/gallery/in-galaxy-fit3-r390-sm-r390nzsainu-thumb-539989193?$216_216_PNG$';
    price03 = '1200';
    EMI03 ='300';
    save03 = '300';
    emi03 = '361';
  }

  document.getElementById('text03').innerHTML = textColor03;
  document.getElementById('image03').src = imageUrl03;
  document.getElementById('price03').textContent = price03;
  document.getElementById('delete03').textContent = EMI03;
  document.getElementById('save03').textContent = save03;
  document.getElementById('Emi03').textContent =emi03;
}

// recommended part close





