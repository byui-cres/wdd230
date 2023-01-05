const date = document.lastModified;
const dateyear = new Date();
const year = dateyear.getFullYear();
document.querySelector("#copyrightyear").textContent = year;
document.querySelector("#lastModified").textContent = date;