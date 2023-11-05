const name = "Chandra Sekhar";
const age = 32;

const currentYear = new Date().getFullYear();
const yearofbirth = currentYear - age;
const email = `${name.split(" ")[0].toLowerCase()}.${yearofbirth}@example.com`;

document.getElementById("id1").textContent = name;
document.getElementById("id2").textContent = age;
document.getElementById("id3").textContent = yearofbirth;
document.getElementById("id4").textContent = email;
document.getElementById("id5").textContent = "Web Developer";
