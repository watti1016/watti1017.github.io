let imagesItems = [...document.querySelectorAll(".img-wrap")]; 
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");


let options = {
  rootMargin: "0px", 
  threshold: 0.5, 
};

let setItemActive = (entries) => {
  
  entries.map((entry) => {
  
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};

let observer = new IntersectionObserver(setItemActive, options); 


const mq = window.matchMedia("(max-width: 768px)");

if (mq.matches) {
  imagesItems.map((item, index) => {
    item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
    item.style.left = "5%";
    observer.observe(item); 
  });

  titles.map((title, index) => {
    title.style.left = "35%";
    observer.observe(title);
  });
} else {
  imagesItems.map((item, index) => {
    item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item); 
  });

  titles.map((title, index) => {
    index % 2 == 0 ? (title.style.left = "52%") : (title.style.left = "35%");
    observer.observe(title);
  });
}



observer.observe(titleMessage);