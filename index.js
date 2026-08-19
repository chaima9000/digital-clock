function update() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minute = now.getMinutes().toString().padStart(2,0);
    const second = now.getSeconds().toString().padStart(2,0);
    

    const timestring = `${hours}:${minute}:${second}`;
    document.getElementById("clock").textContent = timestring;
}
update();
setInterval(update, 1000);
