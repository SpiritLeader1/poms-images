const photos = {
    anger: [
        "Emotional Pictures (Selected)/Anger/2683.jpg",
        "Emotional Pictures (Selected)/Anger/2691.jpg",
        "Emotional Pictures (Selected)/Anger/6211.jpg",
        "Emotional Pictures (Selected)/Anger/6312.jpg",
        "Emotional Pictures (Selected)/Anger/6313.jpg",
        "Emotional Pictures (Selected)/Anger/6520.jpg",
        "Emotional Pictures (Selected)/Anger/6540.jpg",
        "Emotional Pictures (Selected)/Anger/6550.jpg",
        "Emotional Pictures (Selected)/Anger/6560.jpg",
        "Emotional Pictures (Selected)/Anger/9163.jpg"
    ],
    confusion: [
        "Emotional Pictures (Selected)/Confusion/7184.jpg",
        "Emotional Pictures (Selected)/Confusion/7188.jpg",
        "Emotional Pictures (Selected)/Confusion/7207.jpg",
        "Emotional Pictures (Selected)/Confusion/7237.jpg",
        "Emotional Pictures (Selected)/Confusion/7242.jpg",
        "Emotional Pictures (Selected)/Confusion/7247.jpg",
        "Emotional Pictures (Selected)/Confusion/7248.jpg",
        "Emotional Pictures (Selected)/Confusion/7249.jpg",
        "Emotional Pictures (Selected)/Confusion/7497.jpg",
        "Emotional Pictures (Selected)/Confusion/9468.jpg"
    ],
    depression: [
        "Emotional Pictures (Selected)/Depression/2205.jpg",
        "Emotional Pictures (Selected)/Depression/2276.jpg",
        "Emotional Pictures (Selected)/Depression/2301.jpg",
        "Emotional Pictures (Selected)/Depression/2375.1.jpg",
        "Emotional Pictures (Selected)/Depression/2456.jpg",
        "Emotional Pictures (Selected)/Depression/2900.1.jpg",
        "Emotional Pictures (Selected)/Depression/3300.jpg",
        "Emotional Pictures (Selected)/Depression/6311.jpg",
        "Emotional Pictures (Selected)/Depression/9041.jpg",
        "Emotional Pictures (Selected)/Depression/9432.jpg"
    ],
    fatigue: [
        "Emotional Pictures (Selected)/Fatigue/2393.jpg",
        "Emotional Pictures (Selected)/Fatigue/2397.jpg",
        "Emotional Pictures (Selected)/Fatigue/2840.jpg",
        "Emotional Pictures (Selected)/Fatigue/7030.jpg",
        "Emotional Pictures (Selected)/Fatigue/7031.jpg",
        "Emotional Pictures (Selected)/Fatigue/7040.jpg",
        "Emotional Pictures (Selected)/Fatigue/7060.jpg",
        "Emotional Pictures (Selected)/Fatigue/7224.jpg",
        "Emotional Pictures (Selected)/Fatigue/7700.jpg",
        "Emotional Pictures (Selected)/Fatigue/9360.jpg"
    ],
    tension: [
        "Emotional Pictures (Selected)/Tension/2730.jpg",
        "Emotional Pictures (Selected)/Tension/3000.jpg",
        "Emotional Pictures (Selected)/Tension/3010.jpg",
        "Emotional Pictures (Selected)/Tension/3019.jpg",
        "Emotional Pictures (Selected)/Tension/3053.jpg",
        "Emotional Pictures (Selected)/Tension/3068.jpg",
        "Emotional Pictures (Selected)/Tension/3400.jpg",
        "Emotional Pictures (Selected)/Tension/9252.jpg",
        "Emotional Pictures (Selected)/Tension/9325.jpg",
        "Emotional Pictures (Selected)/Tension/9405.jpg"
    ],
    vigor: [
        "Emotional Pictures (Selected)/Vigor/1710.jpg",
        "Emotional Pictures (Selected)/Vigor/1811.jpg",
        "Emotional Pictures (Selected)/Vigor/2045.jpg",
        "Emotional Pictures (Selected)/Vigor/2216.jpg",
        "Emotional Pictures (Selected)/Vigor/2303.jpg",
        "Emotional Pictures (Selected)/Vigor/2345.jpg",
        "Emotional Pictures (Selected)/Vigor/4601.jpg",
        "Emotional Pictures (Selected)/Vigor/4626.jpg",
        "Emotional Pictures (Selected)/Vigor/8033.jpg",
        "Emotional Pictures (Selected)/Vigor/8490.jpg"
    ]
}

let currentCategory = null;
let currentIndex = 0;
let repeatCount = 0;
const maxRepeats = 8; // Number of times to repeat the slideshow for each category

function startSlideShow(category) {
    currentCategory = category;
    repeatCount = 0;
    startSequence();
}
function startSequence() {
    currentIndex = 0;
    document.getElementById("menu").style.display = "none";
    document.getElementById("postexp").style.display = "none";
    document.getElementById("slideshow").style.display = "none";

    
    if(repeatCount > 0) {
        document.getElementById("slideshow").style.display = "block";
        showSlide();
    } else {
        document.getElementById("fixation-dot").style.display = "block";
        setTimeout(() => {
            document.getElementById("fixation-dot").style.display = "none";
            // Show blank screen for 1500 ms
            setTimeout(() => {
                document.getElementById("slideshow").style.display = "block";
            showSlide();
            }, 1500);
        }, 500);
    }
}

function showSlide() {
    if (currentIndex < photos[currentCategory].length) {
        const slide = document.getElementById("slide");
        slide.src = photos[currentCategory][currentIndex];
        setTimeout(() => {
            currentIndex++;
            showSlide();
        }, 7500); // Display each photo for 7500 ms
    } else {
        repeatCount++;;
        if (repeatCount < maxRepeats) {
            startSequence(); // Restart the sequence
        } else {
            document.getElementById("slideshow").style.display = "none";
            document.getElementById("postexp").style.display = "block";
            document.getElementById("backBtn").style.display = "block";
            console.log("Total elapsed seconds:", debugSeconds);
        }
    }
}

function returnToMenu() {
    
    document.getElementById("menu").style.display = "flex";
    document.getElementById("postexp").style.display = "none";
    document.getElementById("slideshow").style.display = "none";
    document.getElementById("fixation-dot").style.display = "none";
    document.getElementById("backBtn").style.display = "none";
    currentCategory = null;
    currentIndex = 0;
    repeatCount = 0;

}


