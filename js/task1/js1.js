function generate(){
    let x = Math.floor(Math.random()*6)+1;
    div.innerHTML = `<p>The dice Number is: ${x}</p>`;
}

var div = document.getElementById("result");
