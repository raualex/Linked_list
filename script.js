//Variables
var webTitleInput = document.querySelector("#title-input");
var webUrlInput = document.querySelector("#url-input");
var enterBtn = document.querySelector(".enter-button");
var bookmarksList = document.querySelector(".bookmarks-list");
var readBtn = document.querySelector("#read-button");
var deleteBtn = document.querySelector("#delete-button");

//Event Listeners
enterBtn.addEventListener("click", checkForInputs);

//Functions

function checkForInputs() {
	event.preventDefault();
	if (webTitleInput.value == "" || webUrlInput.value == "") {
		alert("Please enter both a website title and a valid URL.");
	}
	else {
		submit();
		console.log("so far so good");
	}
};


function submit() {
	var bookmarkEntry = `<article aria-label="bookmark">
		<h3>${webTitleInput.value}</h3>
		<div class="link-border">
		<a href="http://${webUrlInput.value}" alt="Link to ${webTitleInput.value}">${webUrlInput.value}</a></div>
		<button class="read-button" type="button" onclick="markRead(event)">Read</button>
		<button class="delete-button" type="reset">Delete</button>
		</article>`;

	bookmarksList.innerHTML += bookmarkEntry;
	console.log("nailed it")
};




function markRead(event) {
  event.preventDefault();
  var article = event.target.parentNode;
  article.classList.toggle('read');
 };

function markDelete() {

};

