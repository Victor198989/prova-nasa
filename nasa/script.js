const mainPictureContainer = document.querySelector("#main-picture");
const previousPicturesContainer = document.querySelector("#previous-pictures");

const API_KEY = "sXypXBTu3UnfWhDfqZ6HKxVx2ckxgm4drQzfc2BB";

let today = new Date();
// console.log(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)

// converto la data di oggi in millisecondi
let todayMilliseconds = Date.now();
console.log(todayMilliseconds);
// calcolo quanti millisecondi ci sono in 10 giorni
function convertDaysInMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}
let millisecondsInTenDays = convertDaysInMilliseconds(20);
console.log(millisecondsInTenDays);

// sottraggo quel numero alla data di oggi
// ho ottenuto la data di 10 giorni fa espressa in millisecondi

let start = "2024-2-12"; // data di partenza (es. 10 giorni fa | 10 febbraio)
let end = "2024-2-2"; // data odierna
// fetch con data specifica
fetch(
  `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&thumbs=true&start_date=${start}&end_date=${end}`
)
  .then((response) => response.json())
  .then((pictures) => {
    let reservedPictures = [...pictures].reverse();
    // console.log(reservedPictures);
    let mainPicture = pictures[0];
    let previousPictures = reservedPictures.slice(1);
    showMainPicture(mainPicture);
    showPreviousPictures(previousPictures);
  });

// fetch per range di date
// fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&thumbs=true&start_date=2024-01-15&end_date=2024-01-30`)
//   .then(response => response.json())
//   .then(data => console.log(data))

function showMainPicture(picture) {
  mainPictureContainer.innerHTML = `
    <h3>${picture.title}</h3>
    <img class="main-img" src="${picture.url}"/>
    <p>${picture.explanation}</p>
  `;
  // let myImg = document.createElement('img');
  // myImg.classList.add('main-img');
  // myImg.src = `${image}`;
  // mainPictureContainer.append(myImg);
}

function showPreviousPictures(pictures) {
  // svuoto il contenitore
  previousPicturesContainer.innerHTML = "";
  // codice per mostrarle nel DOM
  pictures.forEach((picture) => {
    // console.log(picture)
    // per ogni foto, creo un <div> con dentro <img />
    let pictureContainer = document.createElement("div");
    pictureContainer.innerHTML = `
      <img src="${picture.url}"/>
    `;
    previousPicturesContainer.append(pictureContainer);
  });
  // for(let picture of pictures) {
  //   console.log(picture)
  // }
}
