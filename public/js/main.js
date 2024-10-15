document.addEventListener("DOMContentLoaded",  () => {
    
    const ul_bar = document.querySelector(".main-list");
    let scrolled = false
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100 && !scrolled) {
            scrolled = true
            ul_bar.classList.add("blur")
        }  else if (window.scrollY <= 100 && scrolled) {
            scrolled = false;
            ul_bar.classList.remove("blur");
        }
    })

    const infoCard = document.querySelectorAll('.card-inner-expand');
    const overlay = document.getElementById('overlay');


    
    console.log("infoCard:", infoCard);  // Check if the element is being selected
    // This needs to be the card object

    infoCard.forEach(element => {
        element.addEventListener('click', () => {
            const childCard =  element.querySelector('.card-inner-expanded')
            if (childCard) {
                overlay.innerHTML = '';
                overlay.appendChild(childCard.cloneNode(true));
                overlay.classList.add('active');
            } else {
                console.log("No ChildCard found")
            }
        })
    })

    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
    });


    function setRandomImage() {
        const TotalImagesPotrait = 19;
        const TotalImageLandscape = 12

        const randomImage1 = Math.floor(Math.random() * TotalImagesPotrait) + 1;
        const randomImage2 = Math.floor(Math.random() * TotalImageLandscape) + 1;


        document.querySelector('.carousel-photo-1').style.backgroundImage = `url('../images/landscape/photo${randomImage2}.jpg')`;
        document.querySelector('.carousel-photo-2').style.backgroundImage = `url('../images/potrait/photo${randomImage1}.jpg')`;
    }

    window.onload = setRandomImage;
})

