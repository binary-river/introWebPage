
const musicList = [
"https://www.youtube.com/embed/-_1fittqOqM",
"https://www.youtube.com/embed/9UMxZofMNbA",
"https://www.youtube.com/embed/k0bYKIhYY7k",
"https://www.youtube.com/embed/Dx5qFachd3A",
"https://www.youtube.com/embed/cL9EqZeHv2o"
];

const getMusicEmbededFrame = () => {

    const num = Math.floor(Math.random()*musicList.length);
    const source = `<iframe width="306" height="180" src="${musicList[num]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    return source;
}