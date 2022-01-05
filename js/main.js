var b1 = document.getElementById('button1');
var b1a = document.getElementById('button1-after');
var b2 = document.getElementById('button2');
var b2a = document.getElementById('button2-after');
var b3 = document.getElementById('button3');
var b3a = document.getElementById('button3-after');
var b4 = document.getElementById('button4');
var b4a = document.getElementById('button4-after');
var b5 = document.getElementById('button5');
var b5a = document.getElementById('button5-after');
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');
var line4 = document.getElementById('line4');

function getProduct1() {
    document.getElementById('number-product').innerHTML = "#1 Face Mask";
    document.getElementById('product-title').innerHTML = "Face Mask\n\nAll Variant";
    document.getElementById('product-subtitle').innerHTML = "-By Vidia";
}

function getProduct2() {
    document.getElementById('number-product').innerHTML = "#2 Body Soap";
    document.getElementById('product-title').innerHTML = "Glutta Colagen\n\nBody Soap";
    document.getElementById('product-subtitle').innerHTML = "-By Beautetox";
}

function getProduct3() {
    document.getElementById('number-product').innerHTML = "#3 Lip Care";
    document.getElementById('product-title').innerHTML = "Lippie Serum";
    document.getElementById('product-subtitle').innerHTML = "-By Raecca";
}

function getProduct4() {
    document.getElementById('number-product').innerHTML = "#4 Face Mask";
    document.getElementById('product-title').innerHTML = "Fresh Dry Fruit\n\nPeel Of Mask";
    document.getElementById('product-subtitle').innerHTML = "-By Gizzle";
}

function getProduct5() {
    document.getElementById('number-product').innerHTML = "#5 Face Mask";
    document.getElementById('product-title').innerHTML = "Greentea & Pinkcow\n\nFace & Body Mask";
    document.getElementById('product-subtitle').innerHTML = "-By Beautetox";
}

function getButton1() {
    b1a.style.display = 'flex';
    b2a.style.display = 'none';
    b3a.style.display = 'none';
    b4a.style.display = 'none';
    b5a.style.display = 'none';
    b1.style.display = 'none';
    b2.style.display = 'flex';
    b3.style.display = 'flex';
    b4.style.display = 'flex';
    b5.style.display = 'flex';
    line1.style.display = 'flex';
    line2.style.display = 'none';
    line3.style.display = 'none';
    line4.style.display = 'none';
}

function getButton2() {
    b1a.style.display = 'none';
    b2a.style.display = 'flex';
    b3a.style.display = 'none';
    b4a.style.display = 'none';
    b5a.style.display = 'none';
    b1.style.display = 'flex';
    b2.style.display = 'none';
    b3.style.display = 'flex';
    b4.style.display = 'flex';
    b5.style.display = 'flex';
    line1.style.display = 'flex';
    line2.style.display = 'flex';
    line3.style.display = 'none';
    line4.style.display = 'none';
}

function getButton3() {
    b1a.style.display = 'none';
    b2a.style.display = 'none';
    b3a.style.display = 'none';
    b4a.style.display = 'none';
    b5a.style.display = 'none';
    b1.style.display = 'flex';
    b2.style.display = 'flex';
    b4.style.display = 'flex';
    b5.style.display = 'flex';
    line1.style.display = 'none';
    b3.style.display = 'none';
    b3a.style.display = 'flex';
    line1.style.display = 'none';
    line2.style.display = 'flex';
    line3.style.display = 'flex';
    line4.style.display = 'none';
}

function getButton4() {
    b1a.style.display = 'none';
    b2a.style.display = 'none';
    b3a.style.display = 'none';
    b4a.style.display = 'flex';
    b5a.style.display = 'none';
    b1.style.display = 'flex';
    b2.style.display = 'flex';
    b3.style.display = 'flex';
    b4.style.display = 'none';
    b5.style.display = 'flex';
    line1.style.display = 'none';
    line2.style.display = 'none';
    line3.style.display = 'flex';
    line4.style.display = 'flex';
}

function getButton5() {
    b1a.style.display = 'none';
    b2a.style.display = 'none';
    b3a.style.display = 'none';
    b4a.style.display = 'none';
    b5a.style.display = 'flex';
    b1.style.display = 'flex';
    b2.style.display = 'flex';
    b3.style.display = 'flex';
    b4.style.display = 'flex';
    b5.style.display = 'none';
    line1.style.display = 'none';
    line2.style.display = 'none';
    line3.style.display = 'none';
    line4.style.display = 'flex';
}