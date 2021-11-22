const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture();

button.addEventListener("click", () => generateRandomPicture());

function generateRandomPicture(){
	let randomNum = Math.floor(Math.random() * 83); 
    const urls = ["mobimages/","mobimages2/"]
    var al = Math.floor(Math.random()*urls.length);
    console.log(`${al}${randomNum}.png`)
	image.setAttribute("src", `${urls[al]}${randomNum}.png`);
}