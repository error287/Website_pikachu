function toggleDiscordText() {
  var discord = document.getElementsByClassName("hide-discord");
  navigator.clipboard.writeText(discord[0].textContent);
  console.log(discord[0].textContent);
  alert("Copied! " + discord[0].textContent);
}
