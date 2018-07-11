//Variables
var webTitleInput = document.querySelector("#title-input");
var webUrlInput = document.querySelector("#url-input");
var enterBtn = document.querySelector(".enter-button");
var bookmarksList = document.querySelector(".bookmarks-list");
var readBtn = document.querySelector("#read-button");
var deleteBtn = document.querySelector("#delete-button");
var errorMsg = document.querySelector(".error");
var outputRead = document.querySelector(".read-bookmarks-counter");
var outputUnread = document.querySelector(".unread-bookmarks-counter"); 

//Event Listeners
enterBtn.addEventListener("click", submit);


//Functions
function checkInput() {
    if (webTitleInput.value.length !== 0 && webUrlInput.value.length !== 0) {
    document.getElementById('enter').disabled = false;
    errorMsg.innerText = '';
  }
};


function submitInput() {
      if (webTitleInput.value.length === 0) {
    errorMsg.innerText = 'Please complete entire form';

    document.getElementById('enter').disabled = true;
    webTitleInput.addEventListener('keyup', checkInput);

  } else if (webUrlInput.value.length === 0) {
    errorMsg.innerText = 'Please complete entire form';
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
  postCountBookmarks();
};


function postCountBookmarks() {
  var readCount = document.querySelectorAll('.read').length;
  var totalBookmarks = document.querySelectorAll('.link-border').length;  
  var unreadCount = totalBookmarks - readCount;
  outputRead.innerText = 'Total read bookmarks: ' + readCount;
  outputUnread.innerText =  'Total unread bookmarks: ' + unreadCount;
};


function markRead(event) {
  event.preventDefault();
  var article = event.target.parentNode;
  article.classList.toggle('read');
  postCountBookmarks();
 };

function markDelete(event) {
  event.preventDefault();
  var bookmark = event.target.parentNode;
  bookmark.parentNode.parentNode.removeChild(bookmark.parentNode);
};
