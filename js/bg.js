
const changeBackgroundImage = (element) => {

    const r = Math.floor(Math.random()*8);
    const str = "./img/" + r + ".jpg";
    element.style.backgroundImage = `url('${str}')`;
}