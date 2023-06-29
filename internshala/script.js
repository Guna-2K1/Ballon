const balloon = document.getElementById('balloon');
const airPump = document.getElementById('airPump');

document.addEventListener("click",(e)=> {
  if (e.target.id === "stick2"){
    const size=
    getComputedStyle(balloon).getPropertyValue("--size");
    balloon.style.setProperty("--size", parseFloat(size) + 0.2);
  }
});
  