//Variables
var webTitleInput = document.querySelector("#title-input");
var webUrlInput = document.querySelector("#url-input");
var enterBtn = document.querySelector(".enter-button");
var bookmarksList = document.querySelector(".bookmarks-list");
var readBtn = document.querySelector("#read-button");
var deleteBtn = document.querySelector("#delete-button");

//Event Listeners
enterBtn.addEventListener("click", submit);


function submit() {
	event.preventDefault();
	checkForInputs();
	var bookmarkEntry = `<article aria-label="bookmark">
				<h3>${webTitleInput.value}</h3>
				<div class="link-border">
				<a href="http://${webUrlInput.value}" alt="Link to [bookmarked site]">${webUrlInput.value}</a></div>
				<button class="read-button" type="button">Read</button>
				<button class="delete-button" type="reset">Delete</button>
				</article>`;

	bookmarksList.innerHTML += bookmarkEntry;
};

function checkForInputs() {
	
};




function markRead() {

};

function markDelete() {

};

