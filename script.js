document.getElementById("marksForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const data = {
      standard: document.getElementById("standard").value,
      exam: document.getElementById("exam").value,
      roll: document.getElementById("roll").value,
      subject: document.getElementById("subject").value,
      marks: document.getElementById("marks").value
    };
  
    fetch("backend/add_marks.php", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(res => alert(res));
  });
  
  document.getElementById("updateForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const data = {
      roll: document.getElementById("u_roll").value,
      subject: document.getElementById("u_subject").value,
      marks: document.getElementById("u_marks").value
    };
  
    fetch("backend/update_marks.php", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(res => alert(res));
  });
  
  document.getElementById("viewForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const roll = document.getElementById("v_roll").value;
  
    fetch("backend/view_marks.php?roll=" + roll)
    .then(res => res.json())
    .then(data => {
      const resultDiv = document.getElementById("viewResult");
      resultDiv.innerHTML = "<h3>Results:</h3>" +
        data.map(d => `<p>${d.subject}: ${d.marks}</p>`).join("");
    });
  });
  