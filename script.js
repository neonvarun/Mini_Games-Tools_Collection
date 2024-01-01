function showSection(sectionId) {
  // Hide all sections
  document.getElementById("games").style.display = "none";
  document.getElementById("tools").style.display = "none";
  document.getElementById("about").style.display = "none";

  // Show the selected section
  document.getElementById(sectionId).style.display = "block";
}

// Initial display when the page loads (e.g., show the Games section)
document.addEventListener("DOMContentLoaded", function () {
  showSection("games");
});

function search() {
  var input, filter, tiles, tile, title, i, txtValue;
  input = document.getElementById("searchBar");
  filter = input.value.toUpperCase();
  tiles = document.getElementsByClassName("tile");

  for (i = 0; i < tiles.length; i++) {
    tile = tiles[i];
    title = tile.getElementsByTagName("p")[0];
    txtValue = title.textContent || title.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tile.style.display = "";
    } else {
      tile.style.display = "none";
    }
  }
}

function previewCode(item) {
  // Redirect to the source code page based on the clicked game or tool
  switch (item) {
    // Games
    case "game1":
      window.location.href = "games/GuessNumber/game1.html";
      break;
    case "game2":
      window.location.href = "games/DiceGame/index.html";
      break;
    case "game3":
      window.location.href = "games/Ping-pong/index.html";
      break;
    case "game4":
      window.location.href = "games/Tic-Tac-Toe/index.html";
      break;
    case "game5":
      window.location.href = "games/WordPerMinute/index.html";
      break;
    // case "game6":
    //   window.location.href = "games/Game5/game5_source_code.html";
    //   break;
    // case "game7":
    //   window.location.href = "games/Game5/game5_source_code.html";
    //   break;
    // case "game8":
    //   window.location.href = "games/Game5/game5_source_code.html";
    //   break;
    // case "game9":
    //   window.location.href = "games/Game5/game5_source_code.html";
    //   break;
    // case "game10":
    //   window.location.href = "games/Game5/game5_source_code.html";
    //   break;
    // Add more cases for additional games...

    // Tools
    case "tool1":
      window.location.href = "tools/WeatherApp/index.html";
      break;
    case "tool2":
      window.location.href = "tools/Qrcode/index.html";
      break;
    case "tool3":
      window.location.href = "tools/PassGenrator/index.html";
      break;
    case "tool4":
      window.location.href = "tools/imageSearchEngine/index.html";
      break;
    case "tool5":
      window.location.href = "tools/CurrencyExchange/index.html";
      break;
    // case "tool6":
    //   window.location.href = "tools/Tool5/tool5_source_code.html";
    //   break;
    // case "tool7":
    //   window.location.href = "tools/Tool5/tool5_source_code.html";
    //   break;
    // case "tool8":
    //   window.location.href = "tools/Tool5/tool5_source_code.html";
    //   break;
    // case "tool9":
    //   window.location.href = "tools/Tool5/tool5_source_code.html";
    //   break;
    // case "tool10":
    //   window.location.href = "tools/Tool5/tool5_source_code.html";
    //   break;
    // case "survey":
    //   window.location.href = "aboutus/Angularproject/index.html";
    //   break;
    // Add more cases for additional tools...

    default:
      console.log(`Source code for ${item} not available.`);
  }
}

document
  .getElementById("darkModeToggle")
  .addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });
