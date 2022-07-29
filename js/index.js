document.getElementById("icon-heart").style.color = "aliceblue";
document.getElementById("icon-email").style.color = "aliceblue";
const icon_heart = document.getElementById("icon-heart");

icon_heart.addEventListener("click", () => {
  if (icon_heart.style.color == "aliceblue") {
    icon_heart.style.color = "red";
  } else if (icon_heart.style.color == "red") {
    icon_heart.style.color = "aliceblue";
  }
});

const icon_email = document.getElementById("icon-email");

icon_email.addEventListener("mouseover", () => {
  icon_email.style.color = "aqua";
});
icon_email.addEventListener("mouseleave", () => {
  icon_email.style.color = "aliceblue";
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1850) {
    let count1 = Number(document.getElementById("count1").innerHTML);
    let mySet1 = setInterval(() => {
      if (count1 != 90) {
        count1 = count1 + 1;
        document.getElementById("count1").innerHTML = count1;
        if (count1 == 90) {
          clearInterval(mySet1);
        }
      }
    }, 80);
    let count2 = Number(document.getElementById("count2").innerHTML);
    let mySet2 = setInterval(() => {
      if (count2 != 60) {
        count2 = count2 + 1;
        document.getElementById("count2").innerHTML = count2;
        if (count2 == 60) {
          clearInterval(mySet2);
        }
      }
    }, 80);

    let count3 = Number(document.getElementById("count3").innerHTML);
    let mySet3 = setInterval(() => {
      if (count3 != 80) {
        count3 = count3 + 1;
        document.getElementById("count3").innerHTML = count3;
        if (count3 == 80) {
          clearInterval(mySet3);
        }
      }
    }, 80);

    let count4 = Number(document.getElementById("count4").innerHTML);
    let mySet4 = setInterval(() => {
      if (count4 != 55) {
        count4 = count4 + 1;
        document.getElementById("count4").innerHTML = count4;
        if (count4 == 55) {
          clearInterval(mySet4);
        }
      }
    }, 80);
  }
  if (scrollY < 800) {
    document.getElementById("btn-up").style.visibility = "hidden";
  }
  if (scrollY > 800) {
    document.getElementById("btn-up").style.visibility = "visible";
  }
  if (scrollY > -1) {
    document.getElementById("home1").classList.add ("active");
    document.getElementById("about1").classList.remove ("active");
    document.getElementById("Services1").classList.remove ("active");
    document.getElementById("Contact1").classList.remove ("active");
  }
  if (scrollY > 820) {
    document.getElementById("home1").classList.remove ("active");
    document.getElementById("about1").classList.add ("active");
    document.getElementById("Services1").classList.remove ("active");
    document.getElementById("Contact1").classList.remove ("active");
  }
  if (scrollY > 1300) {
    document.getElementById("home1").classList.remove ("active");
    document.getElementById("about1").classList.remove ("active");
    document.getElementById("Services1").classList.add ("active");
    document.getElementById("Contact1").classList.remove ("active");
  }
  if (scrollY > 2300) {
    document.getElementById("home1").classList.remove ("active");
    document.getElementById("about1").classList.remove ("active");
    document.getElementById("Services1").classList.remove ("active");
    document.getElementById("Contact1").classList.add ("active");
  }
});
