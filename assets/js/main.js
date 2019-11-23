alert(hi);

const searchDiv = document.getElementById('search-results-container');
const submitBtn = document.getElementById('search-button');
const clearBtn = document.getElementById('clear-button');
const search = (e) => {
  e.preventDefault();
  const searchName = document.getElementById('search-term').value;
  const startYearInput = document.getElementById('start-year');
  const endYearInput = document.getElementById('end-year');
  const numberOfRecods = document.getElementById('exampleFormControlSelect1');
  // add logic to decide what query URL to use (use if statements)
  const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchName + "&api-key=kox4XVfBsXlE9LH6GGJ4jtZo6jQuTBhn";
  axios.get(queryURL)
  .then(function(response){
    const search = response.data.response.docs;
    for (var i = 0; i < search.length; i++) {
      const div = document.createElement("div");
      const h4Headline = document.createElement('h4');
      h4Headline.innerHTML = search[i].headline.main;
      div.append(h4Headline);
      const h6Byline = document.createElement('h6');
      h6Byline.innerHTML = search[i].byline.original;
      div.append(h6Byline);
      const pDesc = document.createElement('p');
      pDesc.innerHTML = search[i].lead_paragraph;
      div.append(pDesc);
      div.classList.add("searchResultCard");
      searchDiv.appendChild(div);
    }
  });
}
const clear = () => {
  while(searchDiv.firstChild){
    searchDiv.removeChild(searchDiv.firstChild);
  }
}
clearBtn.addEventListener("click", clear);
submitBtn.addEventListener("click", search);