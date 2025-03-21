const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setHands() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;


    if (seconds === 0) {
        secondHand.style.transition = "none"; // Disable transition
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        // Force reflow to ensure transition reset
        secondHand.offsetWidth; // Triggers a reflow (hack to reset CSS changes)

        secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.98, 0.39)"; // Re-enable transition
    } else {
        secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.98, 0.39)";
    }


    secondHand.style = `transform: rotate(${secondsDegrees}deg)`;
    minuteHand.style = `transform: rotate(${minuteDegrees}deg)`;
    hourHand.style = `transform: rotate(${hoursDegrees}deg)`;
}

setInterval(setHands, 1000);