//Variables
var webTitleInput = document.querySelector("#title-input");
var webUrlInput = document.querySelector("#url-input");
var enterBtn = document.querySelector(".enter-button");
var bookmarksList = document.querySelector(".bookmarks-list");
//Redundant
// var titleOutput = document.querySelector("#title-output");
// var urlOutput = document.querySelector("#url-output");
var readBtn = document.querySelector("#read-button");
var deleteBtn = document.querySelector("#delete-button");
var errorMsg = document.querySelector(".error");

//Event Listeners
// webTitleInput.addEventListener("keyup", enterTitle);
// webUrlInput.addEventListener("keyup", enterUrl);
//Don't need these
enterBtn.addEventListener("click", submit);
// readBtn.addEventListener("click", markRead);
//second event listner for mark as unread???//
// deleteBtn.addEventListener("click", markDelete);

//Functions

// enterTile() {
// //redundant
// };

// enterUrl() {
// //redundant
// };

// document.getElementById('enter').disabled = true;

// webUrlInput.addEventListener('keyup', checkInput);
// webTitleInput.addEventListener('keyup', checkInput);

function checkInput() {
    if (webTitleInput.value.length !== 0 && webUrlInput.value.length !== 0) {
    document.getElementById('enter').disabled = false;
    errorMsg.innerText = '';
  }
};


function submitInput() {
      if (webTitleInput.value.length === 0) {
    errorMsg.innerText = 'Please enter complete Website information';
    document.getElementById('enter').disabled = true;
    webTitleInput.addEventListener('keyup', checkInput);

  } else if (webUrlInput.value.length === 0) {
    errorMsg.innerText = 'Please enter complete Website information';
    document.getElementById('enter').disabled = true;
    webUrlInput.addEventListener('keyup', checkInput);
  }
};

function submit(event) {
	event.preventDefault();
	var bookmarkEntry = `<section class="bookmark-background">
				<article aria-label="bookmark">
				<h3>${webTitleInput.value}</h3>
				<section class="link-border">
				<a href="http://${webUrlInput.value}" alt="Link to ${webTitleInput.value}">${webUrlInput.value}</a></section>
				<button class="read-button" type="button" onclick="markRead(event)">Read</button>
				<button class="delete-button" type="reset" onclick="markDelete(event)">Delete</button>
				</article></section>`;

  if (webTitleInput.value.length === 0 || webUrlInput.value.length === 0) {
     submitInput();
  } else {
    bookmarksList.innerHTML += bookmarkEntry ;
  }
};

function markRead(event) {
  event.preventDefault();
  var article = event.target.parentNode;
  article.classList.toggle('read');
 };

function markDelete(event) {
  event.preventDefault();
  var bookmark = event.target.parentNode;
  bookmark.parentNode.parentNode.removeChild(bookmark.parentNode);
};

