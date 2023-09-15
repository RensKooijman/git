let jsonData = 'l';
const jsonFilePath = "dataSet.json";

function init(){
    fetch(jsonFilePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      jsonData = data;
      procesData();
    })
    .catch(error => {
      console.error('There was a problem fetching or parsing the JSON file:', error);
    });  
}
function procesData(){
    let table = document.createElement('ul'); 
    let contentHolder = document.getElementsByTagName('body');
    jsonData.forEach(url => {
        let listItem = document.createElement('li');
        let href = document.createElement('a');
        href.innerHTML += url.title;
        href.setAttribute("href", url.url);
        listItem.appendChild(href);
        table.appendChild(listItem);
    });
    contentHolder[0].appendChild(table);
}