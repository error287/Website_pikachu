function toggleDiscordText() {
  var discord = document.getElementsByClassName("hide-discord");
  navigator.clipboard.writeText(discord[0].textContent);
  console.log(discord[0].textContent);
  alert("Copied! " + discord[0].textContent);
}



//window.onload = () => {
//  fetch("https://api.lanyard.rest/v1/users/442142462857707520")
//    .then(response => response.json())
//    .then(data => {
//      const avatarUrl = "https://cdn.discordapp.com/avatars/442142462857707520/" + data.data.discord_user.avatar;
//      
//      const status = data.data.discord_status;
//
//      const statusImg = document.getElementById("discord-status");
//      const avatarImg = document.getElementById("discord-avatar");
//      avatarImg.src = avatarUrl;
//
//      if (status == "dnd") {
//          statusImg.src = "assets/icons/status/dnd.png";
//          statusImg.alt = "Do Not Disturb";
//          statusImg.title = "Do Not Disturb";
//      } else if (status == "online") {
//          statusImg.src = "assets/icons/status/online.png";
//          statusImg.alt = "Online";
//          statusImg.title = "Online";
//      } else if (status == "idle") {
//          statusImg.src = "assets/icons/status/idle.png";
//          statusImg.alt = "Idle";
//          statusImg.title = "Idle";
//      } else if (status == "offline") {
//          statusImg.src = "assets/icons/status/offline.png";
//          statusImg.alt = "Offline";
//          statusImg.title = "Offline";
//      }
//    })
//    .catch(error => {
//      console.error("Error fetching data:", error);
//    });
//}

// Define a function to get the dominant color from an image URL
function getDominantColor(imageUrl, callback) {
  const img = new Image();
  img.crossOrigin = 'Anonymous'; // Enable cross-origin access for images
  img.src = imageUrl;

  img.onload = function () {
      const colorThief = new ColorThief();
      const dominantColor = colorThief.getColor(img);

      // Convert the RGB values to a hex color code
      const hexColor = rgbToHex(dominantColor[0], dominantColor[1], dominantColor[2]);

      // Call the callback function with the dominant color as a hex color code
      callback(hexColor);
  };

  img.onerror = function () {
      console.error('Error loading image.');
  };
}

// Function to convert RGB values to a hex color code
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}






function fetchDataAndRefresh() {
  fetch("https://api.lanyard.rest/v1/users/442142462857707520")
    .then(response => response.json())
    .then(data => {
      const avatarUrl = "https://cdn.discordapp.com/avatars/442142462857707520/" + data.data.discord_user.avatar;
      const status = data.data.discord_status;
      const statusImg = document.getElementById("discord-status");
      const status1 = document.getElementById("status-1");
      const avatarImg = document.getElementById("discord-avatar");
      avatarImg.src = avatarUrl;
      
      console.log(data.data);

      if (status == "dnd") {
        statusImg.src = "assets/icons/status/dnd.png";
        statusImg.alt = "Do Not Disturb";
        statusImg.title = "Do Not Disturb";
        //status1.innerHTML = "&nbsp;Do Not Disturb. Feel free to message me."; 
        //status1.style = "color: #f04747;"
      } else if (status == "online") {
        statusImg.src = "assets/icons/status/online.png";
        statusImg.alt = "Online";
        statusImg.title = "Online";
        //status1.innerHTML = "&nbsp;Online. Feel free to message me."; 
        //status1.style = "color: #43b581;"
      } else if (status == "idle") {
        statusImg.src = "assets/icons/status/idle.png";
        statusImg.alt = "Idle";
        statusImg.title = "Idle";
        //status1.innerHTML = "&nbsp;Idle. Feel free to message me."; 
        status1.style = "color: #faa61a;"
      } else if (status == "offline") {
        statusImg.src = "assets/icons/status/offline.png";
        statusImg.alt = "Offline";
        statusImg.title = "Offline";
        //status1.innerHTML = "&nbsp;Offline. Feel free to message me.";
        //status1.style = "color: #747f8e;"
      }

      getDominantColor(avatarUrl, function (hexColor) {
              const avatarctn = document.getElementById("avatar-container");
              avatarctn.style = `border-radius: 50%; border: 15px solid ${hexColor}; background-color: ${hexColor};`;
      });


    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

setInterval(fetchDataAndRefresh, 1000);


window.onload = fetchDataAndRefresh;



