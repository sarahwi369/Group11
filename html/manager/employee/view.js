var fr = new FileReader();
const input = document.getElementById("list");
fr.readAsText(input.files[0]);

document.body.appendChild(fr.readAsText(input.files[0]));