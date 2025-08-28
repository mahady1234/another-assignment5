function getElement(id) {
    const result = document.getElementById(id)
    return result;
}

getElement("first-card-section").addEventListener("click", function (e) {
    if (e.target.className.includes("heart-block")) {
        const heartButton = e.target;
        const heartCount = heartButton.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].children[0].innerText;
        const mainHeartBox = getElement("heart-count").innerText;
        const heartCountTotal = Number(heartCount) + 1;
        getElement("heart-count").innerText =
            heartCountTotal;
        // console.log(heartCountTotal)
        // heartButton.style.hover = "red";
    }


})


getElement("first-card-section").addEventListener("mouseover", function (e) {
    if (e.target.className.includes("heart-block")) {
        e.target.style.color = "red";
    }
});
getElement("first-card-section").addEventListener("mouseout", function (e) {
    if (e.target.className.includes("heart-block")) {
        e.target.style.color = "#747576";
    }
});




// copy counter

getElement("first-card-section").addEventListener("click", function (e) {
    if (e.target.className.includes("copy-number")) {
        const copyBtn = e.target;
        const copyCount = copyBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[2].children[0].innerText;

        const mainCopyBox = getElement("copy-counter").innerText;
        const copyCountTotal = Number(copyCount) + 1;
        getElement("copy-counter").innerText = copyCountTotal;
        // console.log(copyCount)


    }


})
function copyKori(id) {
    var txt = getElement(id).innerText;

    navigator.clipboard.writeText(txt);

    alert("Copied the text: " + txt);

}


// call section


getElement("first-card-section").addEventListener("click", function (e) {
    if (e.target.className.includes("call-push")) {
        const card = e.target.closest(".card-1");
        if (!card) {
            return;
        }

        const cardTitleFull = card.querySelector(".card-name").innerText;

        const cardTitle = card.querySelector(".card-title").innerText;
        const cardNumber = card.querySelector(".card-number").innerText;


        const coinElement = card.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].querySelector(".present-coin");

        let presentCoin = Number(coinElement.innerText);



        if (Number(presentCoin) < 20) {
            alert("Not enough coins for calling someone");
            return;
        }
        presentCoin = Number(presentCoin) - 20;
        coinElement.innerText = presentCoin;

        alert("20 coins used. Calling " + cardTitle + " at " + cardNumber + ".");





        const addCart = getElement("cart-add");

        const newSection = document.createElement("div");
        newSection.innerHTML = `
                     <div class="flex gap-2 justify-between items-center bg-[#FAFAFA] px-1 py-2   my-4 rounded-[8px]">
                        <div class="">
                            <h3 class="pb-3 font-bold text-[16px]">${cardTitleFull}</h3>
                            <p class="text-[14px]">${cardNumber}</p>
                        </div>
                        <p class="text-[14px]">${new Date().toLocaleTimeString()}</p>

                    </div>
         `

        addCart.appendChild(newSection);





        getElement("clear-history").addEventListener("click", function () {
            addCart.innerHTML = "";
        })
    }




})



