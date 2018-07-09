//Variables
var webTitleInput = document.querySelector("#title-input");
var webUrlInput = document.querySelector("#url-input");
var enterBtn = document.querySelector(".enter-button");
var bookmarksList = document.querySelector(".bookmarks-list");
var readBtn = document.querySelector("#read-button");
var deleteBtn = document.querySelector("#delete-button");

//Event Listeners
enterBtn.addEventListener("click", submit);

//Functions
function submit() {
	event.preventDefault();
	var bookmarkEntry = `<article aria-label="bookmark">
				<h3>${webTitleInput.value}</h3>
				<div class="link-border">
				<a href="${webUrlInput.value}" alt="Link to [bookmarked site]">${webUrlInput.value}</a></div>
				<button class="read-button" type="button" onclick="markRead(event)">Read</button>
				<button class="delete-button" type="reset">Delete</button>
				</article>`;

	bookmarksList.innerHTML += bookmarkEntry ;
};

function markRead(event) {
  event.preventDefault();
  var article = event.target.parentNode;
  article.classList.toggle('read');
 };

function markDelete() {

};

