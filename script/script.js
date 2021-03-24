let myBtn = document.getElementById("demo")
console.log(myBtn)
let x = document.getElementById("wrapper");

myBtn.addEventListener("click", function(){

if (x.style.display === "none"){
  x.style.display = "block";
} else {
  x.style.display = "none";
}
});

let d = new Date ();
console.log(d);

let visited = document.getElementById('visited');

visited.addEventListener("mouseover",function(){
visited.innerHTML = "<h1>Thank you for visiting my Portfolio website on...</h1>"+ d;
console.log(visited)
});

let image = document.getElementById("profile-pic");
console.log(image)

image.addEventListener("mouseover",function(){
  if (image.style.filter === "none"){
image.style.transition = "transform .8s ease-in-out";
image.style.transform ="rotate3d(0,1,0.5,-3.142rad)";
} else {
image.style.filter ="none";
}
});

let toggleBackground = document.body;
console.log(toggleBackground);

let myFunction = ()=>{
toggleBackground.classList.toggle("dark-mode");
};

let button = document.getElementById("toggle");
button.addEventListener("click",function(){
  if (button.innerHTML === '<i class="fa fa-thumbs-o-up"></i>'){
  button.innerHTML = '<i class="fa fa-thumbs-down"></i>';
} else {
  button.innerHTML = '<i class="fa fa-thumbs-o-up"></i>';
}
})
