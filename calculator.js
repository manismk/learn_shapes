var areaBH = document.querySelector("#areaBH");
var areaSides = document.querySelector("#areaSides");
var areaSideAngle = document.querySelector("#areaSideAngle");
var hypotenuse = document.querySelector("#hypotenuse");
var checkTriangle = document.querySelector("#checkTriangle");

var answerareasideAngle = document.querySelector("#answerareasideAngle");
var answerareaSides = document.querySelector("#answerareaSides");
var answerareaBH = document.querySelector("#answerareaBH");
var answerHypotenuse = document.querySelector("#answerHypotenuse");
var answercheckTriangle = document.querySelector("#answercheckTriangle");

areaBH.addEventListener("submit", (e) => {
  e.preventDefault();
  var base = Number(document.querySelector("#baseBH").value);
  var height = Number(document.querySelector("#heightBH").value);
  var area = 0.5 * base * height;
  answerareaBH.classList.remove("hidden");
  answerareaBH.innerText = `Area is ${area.toFixed(3)}`;
});

areaSides.addEventListener("submit", (e) => {
  e.preventDefault();
  var a = Number(document.querySelector("#sidea").value);
  var b = Number(document.querySelector("#sideb").value);
  var c = Number(document.querySelector("#sidec").value);

  if (a + b > c && b + c > a && a + c > b) {
    var area =
      0.25 * Math.sqrt((a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c));
    answerareaSides.classList.remove("hidden");
    answerareaSides.innerText = `Area is ${area.toFixed(3)}`;
    answerareaSides.style.color = "black";
  } else {
    answerareaSides.innerText = `Sum of two sides of a triangle should be always greater than the  third side.`;
    answerareaSides.style.color = "red";
  }
});

areaSideAngle.addEventListener("submit", (e) => {
  e.preventDefault();

  var a = Number(document.querySelector("#side1").value);
  var b = Number(document.querySelector("#side2").value);
  var angle = Number(document.querySelector("#angle").value);

  //console.log("click");

  if (angle < 180) {
    var area = 0.5 * a * b * Math.sin(angle * (Math.PI / 180));

    answerareasideAngle.classList.remove("hidden");
    answerareasideAngle.innerText = `Area is ${area.toFixed(3)}`;
    answerareasideAngle.style.color = "black";
  } else {
    answerareasideAngle.innerText = `Angle can't be greater than 180°.`;
    answerareasideAngle.style.color = "red";
  }
});

hypotenuse.addEventListener("submit", (e) => {
  e.preventDefault();
  var a = Number(document.querySelector("#base").value);
  var b = Number(document.querySelector("#perpendicular").value);
  var hype = Math.sqrt(a * a + b * b);

  answerHypotenuse.classList.remove("hidden");
  answerHypotenuse.innerText = `Hypotenuse is ${hype.toFixed(3)}`;
});

checkTriangle.addEventListener("submit", (e) => {
  e.preventDefault();
  var a = Number(document.querySelector("#angle1").value);
  var b = Number(document.querySelector("#angle2").value);
  var c = Number(document.querySelector("#angle3").value);

  var sum = a + b + c;
  answercheckTriangle.classList.remove("hidden");
  if (sum === 180) {
    answercheckTriangle.innerText = `Yes these angles can make Triangle`;
  } else {
    answercheckTriangle.innerText = `No these angles can't be made as Triangle`;
  }
});
