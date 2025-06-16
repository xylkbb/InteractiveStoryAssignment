
let optionOneButton = document.querySelector('.option-one');
let optionOneScreen = document.querySelector(".option-one-screen");


let optionTwoButton = document.querySelector(".option-two");
let optionTwoScreen = document.querySelector('.option-two-screen');

let starterScreen = document.querySelector(".title")
let starterScreenContent = document.querySelector(".story-opening")

let breadCrumbOneButton = document.querySelector(".bc-option-one")
let breadCrumbEndScreen = document.querySelector(".breadcrumb-option-one-screen")

let breadCrumbTwoButton = document.querySelector(".bc-option-two")
let breadCrumbLockInScreen = document.querySelector(".lock-in-story-opening")

let altGrassButton = document.querySelector(".manly-option-two")


let grassButtonOne = document.querySelector(".grass-option-one")
let grassButtonTwo = document.querySelector(".grass-option-two")

let stageThreeScreen = document.querySelector(".stage-three-screen")

let finalScreen = document.querySelector(".finish-screen")
let finalButton = document.querySelector(".stage-three-option-one")

let portalFrame = document.querySelector(".is-that-a-portal")

let cavePortalScene = document.querySelector(".is-that-a-portal")
let runButton = document.querySelector(".RUN-option-one")
let hesitateButton = document.querySelector(".WAIT-option-two")

let UhOh = document.querySelector(".UH-OH")
let UhOh2 = document.querySelector(".UH-OH2")

let secretEnding = document.querySelector(".secretEnding")

let startOver = document.querySelector(".start-over-question-mark")


let quackSound = document.querySelector("#quack")
let yummySound = document.querySelector("#yummy")
let UhOhSound = document.querySelector("#uhOhhh")
let grassStepsSound = document.querySelector("#grassSteps")
let huhSound = document.querySelector("#uh")
let portalSound = document.querySelector("#portal")
let deathSound = document.querySelector("#dead")
let yaySound = document.querySelector("#yay")

console.log(optionTwoScreen)
console.log(optionTwoButton)


optionOneButton.addEventListener("click", function(){
    optionOneScreen.style.display="block";
    quackSound.play();
    starterScreen.style.display="none";
    starterScreenContent.style.display="none";
});

optionTwoButton.addEventListener("click", function(){
    optionTwoScreen.style.display="block";
    grassStepsSound.play();
  starterScreen.style.display="none";
    starterScreenContent.style.display="none";
});


breadCrumbOneButton.addEventListener("click", function(){
    yummySound.play();
    breadCrumbEndScreen.style.display="block"
    starterScreen.style.display="none";
    starterScreenContent.style.display="none";
    optionOneScreen.style.display="none"

})

breadCrumbTwoButton.addEventListener("click", function(){
    breadCrumbLockInScreen.style.display="block"
    yummySound.play();
    starterScreen.style.display="none";
    starterScreenContent.style.display="none";
    optionOneScreen.style.display="none"
    breadCrumbEndScreen.style.display="none"


})

altGrassButton.addEventListener("click", function(){
    optionTwoScreen.style.display="block";
    huhSound.play();
    breadCrumbLockInScreen.style.display="none"
    starterScreen.style.display="none";
    starterScreenContent.style.display="none";
    optionOneScreen.style.display="none"
    breadCrumbEndScreen.style.display="none"
})

grassButtonOne.addEventListener("click", function(){
    stageThreeScreen.style.display="block";
    huhSound.play();
    optionTwoScreen.style.display="none";
    breadCrumbLockInScreen.style.display="none"
    starterScreen.style.display="none";
    starterScreenContent.style.display="none";
    optionOneScreen.style.display="none"
    breadCrumbEndScreen.style.display="none"
        cavePortalScene.style.display="none"

})

finalButton.addEventListener("click", function(){
    finalScreen.style.display="block";
    yaySound.play();
    cavePortalScene.style.display="none";
    stageThreeScreen.style.display="none";
    optionTwoScreen.style.display="none";
    breadCrumbLockInScreen.style.display="none"
    starterScreen.style.display="none";
    starterScreenContent.style.display="none";
    optionOneScreen.style.display="none"
    breadCrumbEndScreen.style.display="none"
})
runButton.addEventListener("click", function(){
    UhOh.style.display="block"
    grassStepsSound.play();
    cavePortalScene.style.display="none"
    finalScreen.style.display="none";
    stageThreeScreen.style.display="none";
    optionTwoScreen.style.display="none";
    breadCrumbLockInScreen.style.display="none"
    starterScreen.style.display="none";
    starterScreenContent.style.display="none";
    optionOneScreen.style.display="none"
    breadCrumbEndScreen.style.display="none"
})


startOver.addEventListener("click", function(){
    secretEnding.style.display="none";
    deathSound.play()
    cavePortalScene.style.display="none";
    UhOh2.style.display="none";
    UhOh.style.display="none";
    finalScreen.style.display="none";
    stageThreeScreen.style.display="none";
    optionTwoScreen.style.display="none";
    breadCrumbLockInScreen.style.display="none"
    starterScreen.style.display="block";
    starterScreenContent.style.display="block";
    optionOneScreen.style.display="none";
    breadCrumbEndScreen.style.display="none";
})

startOver.addEventListener("onkeydown", function(){
    secretEnding.style.display="block";
    quackSound.play();
    cavePortalScene.style.display="none";
    UhOh2.style.display="none";
    UhOh.style.display="none";
    finalScreen.style.display="none";
    stageThreeScreen.style.display="none";
    optionTwoScreen.style.display="none";
    breadCrumbLockInScreen.style.display="none"
    starterScreen.style.display="block";
    starterScreenContent.style.display="none";
    optionOneScreen.style.display="none";
    breadCrumbEndScreen.style.display="none";
})


hesitateButton.addEventListener("click", function(){
    UhOh2.style.display="block"
    portalFrame.style.display="none"
    huhSound.play();
    cavePortalScene.style.display="none"
    UhOh.style.display="none"
    finalScreen.style.display="none";
    stageThreeScreen.style.display="none";
    optionTwoScreen.style.display="none";
    breadCrumbLockInScreen.style.display="none"
    starterScreen.style.display="none";
    starterScreenContent.style.display="none";
    optionOneScreen.style.display="none"
    breadCrumbEndScreen.style.display="none"
})

grassButtonTwo.addEventListener("click", function(){
    cavePortalScene.style.display="block";
    UhOh2.style.display="none";
    UhOh.style.display="none";
    finalScreen.style.display="none";
    stageThreeScreen.style.display="none";
    optionTwoScreen.style.display="none";
    breadCrumbLockInScreen.style.display="none"
    starterScreen.style.display="none";
    starterScreenContent.style.display="none";
    optionOneScreen.style.display="none";
        quackSound.play();
breadCrumbEndScreen.style.display="none";
})