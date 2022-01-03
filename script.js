const mainDiv$$ = document.querySelector("div");
const p$$ = document.createElement("p");
const ul$$ = document.querySelector("ul");
const li$$ = document.createElement("li");

const random = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const array = await res.json();

  p$$.innerHTML = array.value;
  mainDiv$$.appendChild(p$$);
 


 function getRandomJoke() {
     var randomJokesURL = "https://api.icndb.com/jokes/random";
     var excludeExplicitURL = "https://api.icndb.com/jokes/random?exclude=[explicit]"
     if ($('#explicitCheck').prop("checked")){
        random(excludeExplicitURL);
     } else {
        random(randomJokesURL);
     }
 }; 

};
//  const mainDiv$$ = document.querySelector("div");
//  const p$$ = document.createElement("p");
//  const ul$$ = document.querySelector("ul");
//  const li$$ = document.createElement("li");
 
//  const random = async () => {
//    const res = await fetch("https://api.chucknorris.io/jokes/random");
//    const array = await res.json();
//    p$$.innerHTML = array.value;
//    mainDiv$$.appendChild(p$$);
//  };
 
 
//   function getRandomJoke() {
//       var randomJokesURL = "https://api.icndb.com/jokes/random";
//       var excludeExplicitURL = "https://api.icndb.com/jokes/random?exclude=[explicit]"
//       if ($('#explicitCheck').prop("checked")){
//          random(excludeExplicitURL);
//       } else {
//          random(randomJokesURL);
//       }
//   }; 
 
 
 