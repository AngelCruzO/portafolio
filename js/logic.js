let list = document.querySelectorAll('.nav li');

function active(){
  list.forEach((i) => i.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((i) => i.addEventListener('click', active))

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');

menuToggle.onclick = function(){
  header.classList.toggle('active');
}


/*const images = ['Azure','C','C++','CSS3','Git','GitHub','HTML5','Markdown','Materialize','MATLAB','MySQL','PHP','Postman','Python','SQLServer','Vim','VS','VSCode'];*/


fetch('js/config.json').then(response => {
  if(!response.ok){
    throw new Error("La respuesta no fue satisfactoria");
  }
  return response.json();
}).then( data => {
  
  console.log(data);
  const container = document.querySelector('.logos-slide');
  const contentProjects = document.querySelector('#projects .content');

  const images = data[0].images
  const projects = data[0].projects

  images.forEach(image => {

    const imgElement = document.createElement('img');

    imgElement.src = `assets/images/tech/${image}.svg`;
    imgElement.alt = `logo ${image}`

    container.appendChild(imgElement);
});

  var copy = container.cloneNode(true);
  document.querySelector('.logos').appendChild(copy);


for (const key in projects) {
  if (projects.hasOwnProperty(key)) {
    const project = projects[key];

    const card = document.createElement('div');
    card.classList.add('card');

    let cardContent = `<img src="assets/images/default.jpg" alt="Default image">`;
    cardContent += `<div class="card-content">`;
    cardContent += `<div class="card-title"><h3>${project.name}</h3></div>`;
    cardContent += `<div class="card-description"><p>${project.description}</p></div>`;
    cardContent += `<div class="card-footer">`;

    if (project.web) {
      cardContent += `<a class="btn" href="${project.web}" target="_blank">Demo</a>`;
    }

    if (project.github) {
      cardContent += `<a class="btn" href="${project.github}" target="_blank">Github</a>`;
    }

    cardContent += `</div></div>`;

    card.innerHTML = cardContent;

    contentProjects.appendChild(card);
  }
}

}).catch(error => {
  console.error('Hay un error en la operación fetch:', error);
});
