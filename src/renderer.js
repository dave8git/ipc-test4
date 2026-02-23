const getFolderName = document.getElementById("btn-open-folder");
const filterAll = document.getElementById("filter-all");
const filterAudio= document.getElementById("filter-audio");
const filterVideo = document.getElementById("filter-video");
const filterFav = document.getElementById("filter-fav");
const btnScan = document.getElementById("btn-scan");
const btnRefresh = document.getElementById("btn-refresh");
const searchInput = document.getElementById("search-input");
const fileListContainer = document.getElementById("file-list");
const statFiles = document.getElementById("stat-files");
const statDuration = document.getElementById("stat-duration");
const statSize = document.getElementById("stat-size");
const selectFolder = document.getElementById("btn-open-folder");
const playBtn = document.getElementById("player-play");
const prevBtn = document.getElementById("player-prev");
const nextBtn = document.getElementById("player-next");
const progressBar = document.getElementById("player-progress");
const currentTime = document.getElementById("time-current");
const totalTime = document.getElementById("total-time");
const title = document.getElementById("player-title");
const subtitle = document.getElementById("player-cover");
const cover = document.getElementById("player-cover");
const loopBtn = document.getElementById("btn-togle-loop");
const shuffleBtn = document.getElementById("btn-togle-shuffle");
const fileList = document.getElementById("btn-toggle-shuffle");

getFolderName.addEventListener("click", async () => {
  const files = await window.electronAPI.getFiles();

  console.log("files", files);
  displayFiles(files);
});

function displayFiles(files) {
  fileListContainer.innerHTML = "";
  console.log(files);
} 