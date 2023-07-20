import "./styles.css";

/**
  Write the addheadings() function here
*/
function addHeadings(){
  const articles = document.querySelectorAll("article");
  console.log(articles.length);

articles.forEach((article) => {
  let content = article.innerText;

  article.textContent = "";
  const heading = document.createElement("h2");
  heading.textContent = content;
  article.appendChild(heading);
  })
}

/**
  Write the styleTutorialsAndArticles() function here
*/

function styleTutorialsAndArticles(){
  
const articles = document.querySelectorAll("article");

articles.forEach((article) => {
  let content = article.innerText;
  
  if(content.includes("Tutorial")){
    article.classList.add("tutorial");
  }
  else if(content.includes("Article")){
          article.classList.add("article");
    }
  })
}

/**
  Write the separateAllTutorials() function here
*/

function separateAllTutorials(){
  const articles = document.querySelectorAll("article");
  const container = document.querySelector("container");
  
  let contatinerExist = false;

  for(let article of articles){
      let content = article.innerText;

      //Create section container once if tutorial exists
      if(content.includes("Tutorial") && !contatinerExist){
      const tutorialSection = document.createElement("section");
      container.appendChild(tutorialSection);
      contatinerExist = true;
      }
      
      if(content.includes("Tutorial")){
        tutorialSection.appendChild(article);
      }      
     }
  }

/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
