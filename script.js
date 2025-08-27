//❗❗❗❗❗❗❗ common functions ❗❗❗❗❗❗❗

//❗❗❗❗❗❗❗display heart Points ❗❗❗❗❗❗❗
let displayHeartCount = 0;
const heartIcons = document.getElementsByClassName("heart-icon");
for (const icon of heartIcons) {
  icon.addEventListener("click", function () {
    displayHeartCount++;
    document.getElementById("heart-points").innerText = displayHeartCount;
  });
}

//❗❗❗❗❗❗❗display Copy Points ❗❗❗❗❗❗❗
let displayCopyCount = 0;
const CopyBtns = document.getElementsByClassName("btn-copy");
for (const btn of CopyBtns) {
    btn.addEventListener("click", function () {
        const callNumber = btn.parentNode.parentNode.children[2].innerText;
        alert(`নাম্বার কপি হয়েছে ${callNumber}`);
      displayCopyCount++;
      document.getElementById("copy-point").innerText = displayCopyCount;
    });
}

//❗❗❗❗❗❗❗Call button ❗❗❗❗❗❗❗
const btnCalls = document.getElementsByClassName("btn-call");
for (const btn of btnCalls) {
  btn.addEventListener("click", function () {
    const text = btn.parentNode.parentNode.children[0].innerText;
    const callNumber = btn.parentNode.parentNode.children[2].innerText;

    // display coins
    let coins = Number(document.getElementById("coins").innerText);
    if (coins >= 20) {
      alert(`📞 Calling ${text} ${callNumber}...`);
      document.getElementById("coins").innerText = coins - 20;

      // get history parent
      const historyParent = document.getElementById("history");
      const div = document.createElement("div");
      div.innerHTML = `
            <div
                class="flex justify-between items-center text-xl mb-2 bg-[#fafafa] p-5 rounded-lg"
              >
                <div>
                  <h3 class="text-[#2e2e2e]">${text}</h3>
                  <p class="text-[#666666]">${callNumber}</p>
                </div>
                <p class="text-[#2e2e2e]">${new Date().toLocaleTimeString()}</p>
              </div>
            `;
      historyParent.appendChild(div);
    } else {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কয়েন লাগবে");
    }
  });
}

//❗❗❗❗❗❗❗Clear button ❗❗❗❗❗❗❗
document.getElementById("btn-clear").addEventListener("click", function () {
  document.getElementById("history").innerHTML = "";
});
