const ul = document.querySelector("#ulContainer");
const form = document.querySelector("#tweetForm");
// Using the form objects to retrieve the input values with (name) attribute
const username = form.elements.username;
const tweet = form.elements.tweet;

// Prevent default behaviour of submitting a form
// The behaviour is changing to page to where you are sending the data

// EventListener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTweet(username, tweet);
  // clear input values
  form.reset();
});

// Function Create Li and add user input
const addTweet = (username, tweet) => {
  const li = document.createElement("li");
  li.append(`${username.value} - ${tweet.value}`);
  ul.appendChild(li);
};
