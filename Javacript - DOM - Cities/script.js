const allCitiesContainer = document.getElementById("allCities");
const foodCitiesContainer = document.getElementById("foodCities");
const placeCitiesContainer = document.getElementById("placeCities");
const oddPlateCitiesContainer = document.getElementById("oddPlateCities");
const evenPlateCitiesContainer = document.getElementById("evenPlateCities");

function createCityCard(cityObj) {
  const card = document.createElement("div");
  card.classList.add("city-card");

  const name = document.createElement("div");
  name.classList.add("city-name");
  name.textContent = cityObj.city;

  const famous = document.createElement("div");
  famous.classList.add("city-famous");
  famous.textContent = `Ünlü olduğu şey: ${cityObj.famousFor}`;

  // Badge for type: food or place
  const typeBadge = document.createElement("span");
  typeBadge.classList.add("badge", cityObj.type);
  typeBadge.textContent = cityObj.type === "food" ? "Yemek" : "Tarihi Yer";

  // Badge for plate odd/even
  const plateNum = parseInt(cityObj.plateNumber, 10);
  const plateBadge = document.createElement("span");
  plateBadge.classList.add("badge", plateNum % 2 === 0 ? "plate-even" : "plate-odd");
  plateBadge.textContent = plateNum % 2 === 0 ? "Çift Plaka" : "Tek Plaka";

  const badgeContainer = document.createElement("div");
  badgeContainer.style.marginBottom = "12px";
  badgeContainer.appendChild(typeBadge);
  badgeContainer.appendChild(plateBadge);

  const plate = document.createElement("div");
  plate.classList.add("plate-number");
  plate.textContent = `Plaka Numarası: ${cityObj.plateNumber}`;

  card.appendChild(name);
  card.appendChild(badgeContainer);
  card.appendChild(famous);
  card.appendChild(plate);

  return card;
}

// Hepsini doldur
cities.forEach(city => {
  allCitiesContainer.appendChild(createCityCard(city));
});

// Yemek olanlar
cities.filter(c => c.type === "food").forEach(city => {
  foodCitiesContainer.appendChild(createCityCard(city));
});

// Tarihi yer olanlar
cities.filter(c => c.type === "place").forEach(city => {
  placeCitiesContainer.appendChild(createCityCard(city));
});

// Plaka tek
cities.filter(c => parseInt(c.plateNumber) % 2 === 1).forEach(city => {
  oddPlateCitiesContainer.appendChild(createCityCard(city));
});

// Plaka çift
cities.filter(c => parseInt(c.plateNumber) % 2 === 0).forEach(city => {
  evenPlateCitiesContainer.appendChild(createCityCard(city));
});
