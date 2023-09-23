function turnOnVisibility() {
  if (document.getElementById("modal-container")) {
    document.getElementById("modal-container").style.display = "flex";
  }
}
function turnOffVisibility() {
  document.getElementById("modal-container").style.display = "none";
}
function populateDatalist() {
  const url = "https://backend.getlinked.ai/hackathon/categories-list";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network was not ok");
      }
      turnOnVisibility();
      return response.json();
    })
    .then((data) => {
      const datalist = document.getElementById("categories");
      console.log(data);
      data.forEach((element) => {
        const suggestion = document.createElement("option");
        suggestion.value = element.name;
        datalist.appendChild(suggestion);
        console.log(element);
        console.log(datalist);
      });
    });
}
populateDatalist();
document.addEventListener("submit", (event) => event.preventDefault());
function submitForm() {
  var form = document.getElementById("myForm");
  turnOnVisibility();
  var formData = new FormData(form);
  console.log(formData);
  form.reset();
  fetch("https://backend.getlinked.ai/hackathon/registration", {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      if (response.ok) {
        console.log("POST request successful");
        return response.text();
      }
      throw new Error("POST request failed");
    })
    .then(function (data) {
      console.log("Response:", data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
