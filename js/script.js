var e1 = document.getElementById("p-1");
var e2 = document.getElementById("p-2");
var e3 = document.getElementById("p-3");
var position = [90, 210, 330];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function run() {
    var interval = setInterval(function(){
        for(let i = 0; i < position.length; i++){
            position[i] += 5;
            if(position[i]==360){
                position[i]=0;
            }
        }
        e1.style.transform = "rotate("+position[0]+"deg)";
        e2.style.transform = "rotate("+position[1]+"deg)";
        e3.style.transform = "rotate("+position[2]+"deg)";
    }, 10);
    await sleep(3500);
    clearInterval(interval);
}
