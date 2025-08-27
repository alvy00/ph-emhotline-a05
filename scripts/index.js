console.log("Index.js connected");

function historyElem(name, number, date){
    const container = document.createElement('div');
    container.className = "flex w-full justify-center items-center gap-5 items-center bg-gray-100 rounded-lg px-[10px] md:px-[10px] py-[5px]";

    const innerContainer = document.createElement('div');
    innerContainer.className = "flex flex-col";

    const innerName = document.createElement('span');
    innerName.className = "text-[8px] md:text-[17px] font-bold";
    innerName.innerText = name;

    const innerNumber = document.createElement('span');
    innerNumber.className = "text-gray-400";
    innerNumber.innerText = number;

    const time = document.createElement('p');
    time.className = "text-[7px] md:text-lg";
    time.innerText = date;

    innerContainer.appendChild(innerName);
    innerContainer.appendChild(innerNumber);

    container.appendChild(innerContainer);
    container.appendChild(time);

    return container;
}

function getTime(){
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
}

// Fav icon click
let favCount = parseInt(document.getElementById('fav').innerText);
const heartIcons = document.getElementsByClassName('favIcon');
for(const icon of heartIcons){
    icon.addEventListener('click', function(){
    favCount++;
    document.getElementById('fav').innerText = favCount;
})
}

// Call button functionalities
let coinCount = parseInt(document.getElementById("coin").innerText);
const buttons = document.getElementsByClassName("callBtn");
for(const btn of buttons){
    btn.addEventListener("click", function(){
        const card = btn.parentElement.parentElement;
        const name = card.querySelector(".name").innerText;
        const number = card.querySelector(".number").innerText;
        
        if(coinCount < 20) return alert("Insufficient coins!");

        alert("The call was successful!");
        coinCount -= 20;
        document.getElementById("coin").innerText = coinCount;

        const history = document.getElementById("history");
        history.appendChild(historyElem(name, number, getTime()));
        console.log(name, number, getTime());
    })
}

// Copy click
let copyCount = parseInt(document.getElementById('copy').innerText);
let copyButtons = document.getElementsByClassName('copy');
for(const button of copyButtons){
    button.addEventListener('click', function(){
        const card = button.parentElement.parentElement.parentElement;
        alert("Hotline number successfully copied!")
        copyCount++;
        document.getElementById('copy').innerText = copyCount;
        navigator.clipboard.writeText(card.querySelector(".number").innerText)
        console.log(card);
    })
}

// Clear button
document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('history').innerHTML = '';
    alert("Call history cleared!")
})