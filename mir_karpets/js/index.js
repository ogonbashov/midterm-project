var counter = 0;
var likes = document.querySelector("#likesCount");
var instaLike = document.querySelector("#faLike");
var addInterval;



function realLike() { 
 

  if (instaLike.classList.contains('fa-heart')) {
    instaLike.classList.remove('fa-heart');
    instaLike.classList.add('fa-heart-o');
    instaLike.style.color = "black";
  } else {
    instaLike.classList.remove('fa-heart-o');
    instaLike.classList.add('fa-heart');
    instaLike.style.color = "red";
    counter++;
    likes.innerHTML = counter;
  }
}