const links = [
  "https://siyangsun.medium.com/machine-learning-guide-to-start-up-on-netflix-52ad584b45f6",
  "https://soundcloud.com/imsiyang/waitin4u?in=imsiyang/sets/tethys",
  "https://soundcloud.com/imsiyang/remember-to-lovingly-tuck-yourself-in-every-now-and-then",
  "https://open.spotify.com/track/4nfWs4aCmTOi9Ox5ttp1RV?si=be598f4b5dd6429a",
  "https://siyangsun.github.io/courtyard/doing-quests-is-more-rewarding-than-grinding-skills",
  "https://www.google.com/maps/@34.0629557,-118.3114913,17z/data=!4m3!11m2!2sbqwW_e11Qcu5ssZK0A944g!3e3",
  "https://www.whosampled.com/sample/487818/Josh-Pan-Kys-Wes-Montgomery-Without-You/",
  "https://sander.are.na/siyang/follow-the-food-nurture-the-next-crop-roll-w-the-seasons-bigger-than-u-n-me-aousfkih-qy",
  "https://configure.zsa.io/moonlander/layouts/njbZx/latest/0",
  "https://www.last.fm/user/siyangsun",
  "https://open.spotify.com/playlist/2ZKqxXUH8UBptiYkFDX2LF?si=add5e346f27c4c97",
  "https://www.youtube.com/@slug_boy/videos",
  "https://twitter.com/unevenlyeven/status/1552718870862909440",
  "https://www.instagram.com/p/CexWP7YAHKD/",
  "https://letterboxd.com/unevenlyeven/",
  "https://asianamerican.fyi/",
  "https://soundcloud.com/hatetwo/my-love-is-a-walking-corpse-w-deadsun",
  "https://unevenlyeven.substack.com/p/two-kinds-of-transience",
];

const footer = document.querySelector("footer");
links.forEach(function(href) {
  var star = document.createElement("star");
  var a = document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.textContent = "✧";
  star.appendChild(a);
  document.body.insertBefore(star, footer);
});

// get window width and height
var winWidth = window.innerWidth * 0.95;
var winHeight = window.innerHeight * 0.95;

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

var stars = document.getElementsByTagName("star");
for (var i = 0; i < stars.length; i++) {
  var thisStar = stars[i];
  thisStar.style.top = getRandomNumber(0, winHeight) + "px";
  thisStar.style.left = getRandomNumber(0, winWidth) + "px";
}
