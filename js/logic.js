let list = document.querySelectorAll('.nav li');

function active(){
  list .forEach((i) => i.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((i) => i.addEventListener('click', active))

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');

menuToggle.onclick = function(){
  header.classList.toggle('active');
}

const container = document.querySelector('.slide-track');

const images = ['Azure','C','C++','CSS3','Git','GitHub','HTML5','Markdown','Materialize','MATLAB','MySQL','PHP','Postman','Python','SQLServer','Vim','VS','VSCode'];

images.forEach(image => {
  const slideDiv = document.createElement('div');
  slideDiv.classList.add('slide');

  const imgElement = document.createElement('img');

  imgElement.src = `assets/images/tech/${image}.svg`;

  slideDiv.appendChild(imgElement);
  container.appendChild(slideDiv);
});
