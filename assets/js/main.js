const projects = [
  {
    name: "EcoDoa",
    category: "Sustainability",
    img: "../assets/img/projects/ecodoa.svg"
  },
  {
    name: "Pomofy",
    category: "Productivity",
    img: "../assets/img/projects/pomofy.svg"
  },
  {
    name: "Planta",
    category: "Environment",
    img: "../assets/img/projects/planta.svg"
  }
];

const container = document.getElementById("projects-list");

if (container) {
  projects.forEach(project => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card p-3">
          <img src="${project.img}" class="img-fluid mb-3">
          <h5>${project.name}</h5>
          <p>${project.category}</p>
        </div>
      </div>
    `;
  });
}

function filterProjects(category) {
  const container = document.getElementById("projects-list");
  container.innerHTML = "";

  const filtered = category === "All"
    ? projects
    : projects.filter(p => p.category === category);

  filtered.forEach(project => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card p-3">
          <img src="${project.img}" class="img-fluid mb-3">
          <h5>${project.name}</h5>
          <p>${project.category}</p>
        </div>
      </div>
    `;
  });
}

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if (name === "" || email === "") {
      message.innerText = "Please fill all fields";
      message.style.color = "red";
    } else {
      message.innerText = "Message sent successfully!";
      message.style.color = "green";
    }
  });
}

function toggleDark() {
  document.body.classList.toggle("dark-mode");
}

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const userMessage = document.getElementById("userMessage").value.trim();
    const message = document.getElementById("message");

    if (!name || !email || !userMessage) {
      message.innerText = "Please fill all fields";
      message.style.color = "red";
      return;
    }

    if (!email.includes("@")) {
      message.innerText = "Invalid email";
      message.style.color = "red";
      return;
    }

    message.innerText = "Message sent successfully!";
    message.style.color = "green";

    form.reset();

    // fecha modal automaticamente
    const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
    modal.hide();
  });
}