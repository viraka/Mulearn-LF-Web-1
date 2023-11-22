fetch("./js5.json")
    .then(response => response.json())
    .then(data => showInfo(data))

var div = document.querySelector("#content");
``
function showInfo(data) {
    for (info of data) {
        var div1 = document.createElement("div");
        div1.classList.add("info");
        div1.innerHTML = `<h4>Name: ${info.name}</h4><p>Age: ${info.age}</p><p>City: ${info.place}</p><p>DOB: ${info.dob}</p>`;
        div.appendChild(div1);
    }
}