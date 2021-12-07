window.onload = () => {     //window.onload processes load events after the element has finished loading.    
  setTimeout(() => {               //setTimeout executes once after a specified interval 
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {         //if hamburger menu is clicked
  document.querySelector(".container").classList.toggle("change");                    //the class.toggle will change and the menu will open
});

document.querySelector(".banner button").addEventListener("click", () => {          
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {           //scrolling button will activate when clicked and scroll to top
  document.querySelector("html").style.scrollBehavior = "smooth";                                             //scroll to top smoothly
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

