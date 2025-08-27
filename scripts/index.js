console.log("Index.js connected");

let coinCount = parseInt(document.getElementById("coin").innerText);

// document.querySelectorAll(".callBtn").forEach(callButton => {
//     callButton.addEventListener("click", () => {
//         coinCount -= 20;
//         alert(`Call started ${coinCount}`);
//         document.getElementById("coin").innerText = coinCount;
//     });
// });

document.getElementsByClassName(".callBtn")