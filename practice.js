// common functions
function getInnerText(id) {     
  const innerText = document.getElementById(id).innerText;      
  return innerText;
}    // this function is not working. but why??

// heart icon
let displayHeartCount = 0;
const heartIcons = document.getElementsByClassName("heart-icon");
for (const icon of heartIcons) {
  icon.addEventListener("click", function () {
    displayHeartCount++;
    document.getElementById("heart-points").innerText = displayHeartCount;
    // getInnerText('heart-points') = displayHeartCount;
  });
}