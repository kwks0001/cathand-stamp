let stampBox = document.querySelectorAll(".stampBox");
let stampImgSrc = ["img/icon/肉球のアイコン1.png" , "img/icon/肉球のアイコン3.png"];
let catHand = document.querySelector(".catHand");
let stampContainer = document.querySelector(".stampContainer");
let stampSound = document.querySelector(".stampSound");
let stampSoundSrc = [ "audio/cat1a.mp3" , "audio/cat3b.mp3"]


stampContainer.addEventListener("mousemove", (e) => {
    let rect = stampContainer.getBoundingClientRect();
    
    // 計算滑鼠相對於 container 的位置
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    catHand.style.left = x - 50 + "px";
    catHand.style.top = y - 30 + "px";
});


stampBox.forEach((box) => {
    let mouseStartTime; 
    let mouseEndTime;

    box.addEventListener("mousedown", () => {
        mouseStartTime = Date.now();
        catHand.style.transform = "scale(0.9)";

        // 隨機選擇音效
        let randomNumber = Math.floor(Math.random() * 2);
        stampSound.src = `${stampSoundSrc[randomNumber]}`;
        stampSound.play();
    });

    box.addEventListener("mouseup", () => {
        catHand.style.transform = "scale(1)";

        // 計算滑鼠點擊時長
        mouseEndTime = Date.now();
        let duration = mouseEndTime - mouseStartTime;
        console.log(duration)

        // 隨機選擇印章
        let randomNumber = Math.floor(Math.random() * 2);
        box.children[0].src = `${stampImgSrc[randomNumber]}`;
        
        // 印章出現
        if(box.children[0].style.display == "block") {
            box.children[0].style.display = "none";
        } else {
            box.children[0].style.display = "block";
        }

        // 根據印章案的時長決定stampImg 的 opcacity
        if(duration < 50) {
            box.children[0].style.opacity = 0.3;
        } else if(duration < 100) {
            box.children[0].style.opacity = 0.5;
        } else if(duration < 150) {
            box.children[0].style.opacity = 0.8;
        } else {
            box.children[0].style.opacity = 1;
        }
    });
});