const loginModal = document.getElementById("loginModal");
const loginLink = document.getElementById("login-link");
const closeButton = document.querySelectorAll(".close");
const movieBoxes = document.querySelectorAll(".box");

loginLink.addEventListener("click", (event) => {
  event.preventDefault();
  loginModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeButton.forEach((button) => {
  button.addEventListener("click", () => {
    loginModal.style.display = "none";
    document.body.style.overflow = "auto";
  });
});

window.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

document.getElementById("search").addEventListener("keyup", function () {
  const searchTerm = this.value.toUpperCase();
  movieBoxes.forEach((box) => {
    const title = box.querySelector("figcaption").textContent.toUpperCase();
    box.style.display = title.startsWith(searchTerm) ? "" : "none";
  });
});

document.getElementById("movie-genres").addEventListener("change", function () {
  const selectedGenre = this.value;
  movieBoxes.forEach((card) => {
    card.style.display = (selectedGenre === "all" || card.getAttribute("data-genre") === selectedGenre) ? "" : "none";
  });
});

const posters = document.querySelectorAll(".movie-poster");
const movieModal = document.getElementById("movieModal");
const modalPoster = document.getElementById("modalPoster");
const modalTitle = document.getElementById("modalTitle");
const modalReleaseDate = document.getElementById("modalReleaseDate");
const modalGenre = document.getElementById("modalGenre");
const modalDirector = document.getElementById("modalDirector");

posters.forEach((poster) => {
  poster.addEventListener("click", () => {
    movieModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    modalPoster.src = poster.src;
    modalTitle.textContent = poster.getAttribute("data-title");
    modalReleaseDate.textContent = poster.getAttribute("data-release");
    modalGenre.textContent = poster.getAttribute("data-genre");
    modalDirector.textContent = poster.getAttribute("data-director");
  });
});

movieModal.querySelectorAll(".close").forEach((button) => {
  button.addEventListener("click", () => {
    movieModal.style.display = "none";
    document.body.style.overflow = "auto";
  });
});

window.addEventListener("click", (event) => {
  if (event.target === movieModal) {
    movieModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
  
});
document.addEventListener("DOMContentLoaded", function () {

  const movieBoxes = document.querySelectorAll(".box");

  const movieModal = document.getElementById("movieModal");
  const modalPoster = document.getElementById("modalPoster");
  const modalTitle = document.getElementById("modalTitle");
  const modalReleaseDate = document.getElementById("modalReleaseDate");
  const modalGenre = document.getElementById("modalGenre");
  const modalDirector = document.getElementById("modalDirector");
  const watchButton = movieModal.querySelector("button");

  movieBoxes.forEach(box => {
    box.addEventListener("click", function () {
      const poster = this.querySelector("img").src;
      const title = this.querySelector("img").getAttribute("data-title");
      const releaseDate = this.querySelector("img").getAttribute("data-release");
      const genre = this.querySelector("img").getAttribute("data-genre");
      const director = this.querySelector("img").getAttribute("data-director");
      const url = this.getAttribute("data-url");

      modalPoster.src = poster;
      modalTitle.textContent = title;
      modalReleaseDate.textContent = releaseDate;
      modalGenre.textContent = genre;
      modalDirector.textContent = director;

      watchButton.onclick = function () {
        window.location.href = "https://kissasian.lu/";
      };

      movieModal.style.display = "block";
    });
  });

  const spanClose = movieModal.querySelector(".close");

  spanClose.onclick = function () {
    movieModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === movieModal) {
      movieModal.style.display = "none";
    }
  };
});
function loginUser(event) {
  event.preventDefault();

  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  
  var storedUsername = localStorage.getItem('username');
  var storedPassword = localStorage.getItem('password');

  
  if (username === storedUsername && password === storedPassword) {
      
      var welcomeModal = document.createElement('div');
      welcomeModal.classList.add('modal');
      welcomeModal.innerHTML = `
          <div class="modal-content">
              <span class="close">&times;</span>
              <h2>Welcome!</h2>
              <p>Welcome, ${username}!</p>
              <button onclick="closeWelcomeModal()">Close</button>
          </div>
      `;
      document.body.appendChild(welcomeModal);

      
      setTimeout(function() {
          window.location.href = 'ryryry.html';
      }, 3000); 

  } else {
      alert('Invalid username or password. Please try again.');
  }
}

function registerUser(event) {
  event.preventDefault();
  
 
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

 
  alert('Registration successful! Please login.');

  
  window.location.href = 'login.html';
}

function closeWelcomeModal() {
  var welcomeModal = document.querySelector('.modal');
  if (welcomeModal) {
      welcomeModal.remove();
  }
}
