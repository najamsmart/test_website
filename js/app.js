// Dummy Data
let books = {
  101: { title: "Python", available: true },
  102: { title: "Java", available: true }
};

// LOGIN
function login() {
  let u = username.value;
  let p = password.value;

  if (u === "admin" && p === "1234") {
    window.location = "dashboard.html";
  } else {
    msg.innerText = "Error: Invalid credentials";
    msg.style.color = "red";
  }
}

// SEARCH
function searchBook() {
  let query = search.value.toLowerCase();
  for (let id in books) {
    if (books[id].title.toLowerCase().includes(query)) {
      searchResult.innerText = "Book found: " + books[id].title;
      return;
    }
  }
  searchResult.innerText = "Book not found";
}

// BORROW
function borrowBook() {
  let id = borrowId.value;
  if (books[id] && books[id].available) {
    books[id].available = false;
    borrowResult.innerText = "Borrowed successfully";
  } else {
    borrowResult.innerText = "Book not available";
  }
}

// RETURN
function returnBook() {
  let id = returnId.value;
  if (books[id]) {
    books[id].available = true;
    returnResult.innerText = "Returned & inventory updated";
  }
}

// FINE
function calculateFine() {
  let days = document.getElementById("days").value;
  let fine = days * 10;
  fineResult.innerText = "Fine = Rs. " + fine;
}
