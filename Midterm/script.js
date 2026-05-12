script.js
// ============================================================
//  PART 1 — YOUR DATA
// ============================================================

const items = [
  {
    name: "Accounting Classes",
    category: "School",
    description: "My accounting classes help me build skills in finance, organization, and problem solving."
  },
  {
    name: "Information Systems",
    category: "School",
    description: "Information Systems helps me understand how technology is used in business."
  },
  {
    name: "Lacrosse",
    category: "Athletics",
    description: "Lacrosse has taught me discipline, teamwork, and consistency."
  },
  {
    name: "Team Puerto Rico",
    category: "Athletics",
    description: "Playing for Team Puerto Rico gave me the opportunity to compete internationally."
  },
  {
    name: "Peak Plate",
    category: "Projects",
    description: "Peak Plate was a class project focused on meal planning and counting macros for Hofstra students."
  },
  {
    name: "Portfolio Website",
    category: "Projects",
    description: "This portfolio website shows my work, interests, gallery, and JavaScript feature."
  }
];


// ============================================================
//  PART 2 — THE RENDER FUNCTION
// ============================================================

function renderItems(list) {

  const container = document.getElementById("items-container");

  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {

    const card = document.createElement("div");
    card.className = "item-card";

    card.innerHTML =
      "<h3>" + list[i].name + "</h3>" +
      "<p>"  + list[i].description + "</p>" +
      "<span class='item-tag'>" + list[i].category + "</span>";

    container.appendChild(card);
  }

  document.getElementById("result-count").textContent =
    list.length + " items shown";
}


// ============================================================
//  PART 3 — THE FILTER FUNCTION
// ============================================================

function filterItems(category) {

  switch (category) {

    case "":
      renderItems(items);
      break;

    case "School":
      const filtered1 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "School") {
          filtered1.push(items[i]);
        }
      }
      renderItems(filtered1);
      break;

    case "Athletics":
      const filtered2 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Athletics") {
          filtered2.push(items[i]);
        }
      }
      renderItems(filtered2);
      break;

    case "Projects":
      const filtered3 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Projects") {
          filtered3.push(items[i]);
        }
      }
      renderItems(filtered3);
      break;

    default:
      renderItems(items);
      break;
  }
}


// ============================================================
//  PART 4 — RUN ON LOAD
// ============================================================

filterItems("");
