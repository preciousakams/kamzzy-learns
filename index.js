const bars = document.querySelector('.bars');
const navMenu = document.querySelector('.nav-menu');
bars.addEventListener('click', () => {
  bars.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  bars.classList.remove('active');
  navMenu.classList.remove('active');
}));
const fSpeakers = [{
  speakerImg: 'icons/male.jpg',
  h4: 'molestias debitis',
  red: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque inventore reiciendis voluptatibus a nulla aut.',
},
{
  speakerImg: 'icons/female.jpg',
  h4: 'molestias debitis',
  red: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque inventore reiciendis voluptatibus a nulla aut.',
},
{
  speakerImg: 'icons/male3.jpg',
  h4: 'molestias debitis',
  red: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque inventore reiciendis voluptatibus a nulla aut.',
},
{
  speakerImg: 'icons/female3.jpg',
  h4: 'molestias debitis',
  red: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque inventore reiciendis voluptatibus a nulla aut.',
},
{
  speakerImg: 'icons/male2.jpg',
  h4: 'molestias debitis',
  red: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque inventore reiciendis voluptatibus a nulla aut.',
},
{
  speakerImg: 'icons/female2.jpg',
  h4: 'molestias debitis',
  red: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque inventore reiciendis voluptatibus a nulla aut.',
},

];
const featuredSpeakers = (feature) => {
  const card = document.createElement('div');
  card.classList = 'speaker-col col-md-6 row';
  const speakerImg = document.createElement('div');
  speakerImg.classList = 'speaker-img col-sm-4 col-md-6 col-lg-5 col-xl-4';
  const sImg = document.createElement('img');
  sImg.setAttribute = 'src';
  sImg.src = feature.speakerImg;
  sImg.setAttribute = 'alt';
  sImg.alt.innerHTML = 'speakerImage';
  const speakerDiv = document.createElement('div');
  speakerDiv.classList = 'speakerDiv col-sm-8 col-md-6 col-lg-7 col-xl-8';
  const h4 = document.createElement('h4');
  h4.innerHTML = feature.h4;
  const p = document.createElement('p');
  p.classList = 'red';
  p.innerHTML = feature.red;
  const hr2 = document.createElement('hr');
  hr2.id = 'hr';
  const p2 = document.createElement('p');
  p2.innerHTML = feature.p;
  const speakerRow = document.querySelector('.speakerRow');
  speakerRow.append(card);
  card.append(speakerImg);
  speakerImg.append(sImg);
  card.append(speakerDiv);
  speakerDiv.append(h4);
  speakerDiv.append(p);
  speakerDiv.append(hr2);
  speakerDiv.append(p2);
};
fSpeakers.forEach((feature) => featuredSpeakers(feature));

const border = document.querySelector('.border');
const toggled = document.querySelector('.toggled');
border.addEventListener('click', () => {
  toggled.classList.toggle('active');
});
