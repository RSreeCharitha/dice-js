let rand1;
let rand2;
rand1 = Math.floor( Math.random() * 6+1);
rand2 = Math.floor( Math.random() * 6+1);
let src1 ="dice"+rand1+".png";
let src2 ="dice"+rand2+".png"

/*document.querySelector("div .img1").src=src1;
document.querySelector("div .img2").src=src2;*/

document.querySelector("div .img1").setAttribute("src",src1);
document.querySelector("div .img2").setAttribute("src",src2);
if(rand1>rand2){
  document.querySelector("h1").innerHTML="Player 1 Won";
}
else if(rand1<rand2){
  document.querySelector("h1").innerHTML="Player 2 Won";
}
else {
  document.querySelector("h1").innerHTML="Draw!";
}
