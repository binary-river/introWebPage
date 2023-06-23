
const move = (c) =>{
    const clock = c;
    const d = new Date();
    clock.innerHTML = `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`;
};
