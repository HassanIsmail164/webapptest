fetch("https://training11082022.herokuapp.com/data")
  .then((response) => response.json())
  .then((json) => {
    var students = document.getElementById("students");
    json.Sheet1.forEach((element) => {
      var option = document.createElement("option");
      option.innerHTML = element.A;
      students.appendChild(option);
    });
  });
