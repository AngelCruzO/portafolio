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

const container = document.querySelector('.logos-slide');

/*const images = ['Azure','C','C++','CSS3','Git','GitHub','HTML5','Markdown','Materialize','MATLAB','MySQL','PHP','Postman','Python','SQLServer','Vim','VS','VSCode'];*/

images.forEach(image => {

 
fetch('js/config.json').then(response => {
  if(!response.ok){
    throw new Error("La respuesta no fue satisfactoria");
  }
  return response.json();
}).then( data => {
  console.log(data);
  const images = data[0].images
 const imgElement = document.createElement('img');

  imgElement.src = `assets/images/tech/${image}.svg`;
  imgElement.alt = `logo ${image}`

  container.appendChild(imgElement);
});

var copy = container.cloneNode(true);
document.querySelector('.logos').appendChild(copy);

}).catch(error => {
  console.error('Hay un error en la operación fetch:', error);
});
