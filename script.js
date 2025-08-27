//❗❗❗❗❗❗❗ common functions ❗❗❗❗❗❗❗









//❗❗❗❗❗❗❗display heart icon ❗❗❗❗❗❗❗

let displayHeartCount = 0;
const heartIcons = document.getElementsByClassName("heart-icon");
for (const icon of heartIcons) {
  icon.addEventListener("click", function () {
    displayHeartCount++;
    document.getElementById("heart-points").innerText = displayHeartCount;
  });
}

//❗❗❗❗❗❗❗Call button ❗❗❗❗❗❗❗
const btnCalls = document.getElementsByClassName('btn-call');
for(const btn of btnCalls){
    btn.addEventListener('click', function(){
        const text =  btn.parentNode.parentNode.children[0].innerText;
        const callNumber = btn.parentNode.parentNode.children[2].innerText;

        // display coins
        const displayCoins = 0;
        let coins = Number(document.getElementById('coins').innerText);
        if(coins >= 20){
            alert(`📞 Calling ${text} ${callNumber}...`);
            document.getElementById('coins').innerText = coins - 20;
        }else{
            alert('❌ আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কয়েন লাগবে')
        }
        
    })
}