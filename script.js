//////// Dry skin button

let productBtn = document.querySelector('#dryskin-btn');
let result = document.querySelector('p');

let beautyItems = ['Dry skin: Beauty of Joseon - Relief Sun Gel', 'Dry skin: COSRX Advanced Snail Mucin Gel Cleanser 150ml', 'Dry skin: Beauty of Joseon - Glow Serum', 'Dry skin: Glow recipe Watermelon Glow NIACINAMIDE DEW DROPS 40ML', 'Dry skin: COSRX - Full fit Propolis Light Ampoule - 30ml', 'Dry skin: Madagascar Centella Ampoule - 55ml', 'Dry skin: Im Sorry For My Skin - Honey Beam Ampoule - 30ml', 'Dry skin: ROVECTIN - Clean Lotus Water Cream - 60ml', 'Dry skin: SOME BY MI - AHA-BHA-PHA 30 Days Miracle Cream'];





function getRandomProduct(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}


productBtn.addEventListener('click', () => {
    let index = getRandomProduct(0, beautyItems.length - 1);
    result.innerText = beautyItems[index];
});


//////// Oily skin button

let productBtn2 = document.querySelector('#oilyskin-btn');
let result2 = document.querySelector('p');

let beautyItems2 = ['Oily skin: iUNIK - Calendula Complete Cleansing Oil - 200ml', 'Oily skin: Isntree - Real Mugwort Clay Mask - 100ml', 'Oily skin: Pyunkang Yul - Essence Toner', 'Oily skin: heimish - All Clean Balm - 50ml', 'Oily skin: SOME BY MI - Super Matcha Pore Clean Clay Mask', 'Oily skin: PURITO - Pure Vitamin C Serum - 60ml', 'Oily skin: PURITO - Centella Unscented Serum - 60ml', 'Oily skin: Krave - Matcha Hemp Hydrating Cleanser - 120ml'];


function getRandomProduct2(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result2 = Math.floor(step2) + min;
    return result2;
}

productBtn2.addEventListener('click', () => {
    let index = getRandomProduct2(0, beautyItems.length - 1);
    result2.innerText = beautyItems2[index];
});

