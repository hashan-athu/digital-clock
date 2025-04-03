const $ = (selector) => document.querySelector(selector);

const hour = $(".hour");
const min = $(".min");
const sec = document.createElement("div"); // Create seconds dynamically
sec.classList.add("sec");
sec.textContent = "00";
document.querySelector(".time").appendChild(sec); // Append to time container

const week = $(".week");

function update() {
  const now = new Date();

  hour.textContent = String(now.getHours()).padStart(2, "0");
  min.textContent = String(now.getMinutes()).padStart(2, "0");
  sec.textContent = String(now.getSeconds()).padStart(2, "0");

  // Remove active class from all days
  Array.from(week.children).forEach((ele) => ele.classList.remove("active"));

  // Add active class to the correct day
  week.children[now.getDay()].classList.add("active");
}

// Update clock every second
setInterval(update, 1000);

// Initial update to prevent delay
update();
