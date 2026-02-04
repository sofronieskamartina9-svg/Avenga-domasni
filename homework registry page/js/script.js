
function Student(firstName, lastName, age, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
}

let database = [];

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;

  let student = new Student(firstName, lastName, age, email);
  database.push(student);

  printStudents();
  clearStudentForm();
});

function printStudents() {
  let list = document.getElementById("studentList");
  list.innerHTML = "";

  database.forEach(student => {
    let li = document.createElement("li");
    li.textContent = `${student.firstName} ${student.lastName} (${student.age}) - ${student.email}`;
    list.appendChild(li);
  });
}

function clearStudentForm() {
  document.getElementById("studentForm").reset();
}

/****************************
 * REMINDER APP
 ****************************/

let reminders = [];

document.getElementById("addReminder").addEventListener("click", function () {
  let reminder = {
    title: document.getElementById("title").value,
    priority: document.getElementById("priority").value,
    color: document.getElementById("color").value,
    description: document.getElementById("description").value
  };

  reminders.push(reminder);
  clearReminderForm();
});

document.getElementById("showReminders").addEventListener("click", function () {
  showReminders();
});

function showReminders() {
  let html = `
    <table>
      <tr>
        <th>Title</th>
        <th>Priority</th>
        <th>Description</th>
      </tr>
  `;

  reminders.forEach(reminder => {
    html += `
      <tr>
        <td style="color:${reminder.color}">${reminder.title}</td>
        <td>${reminder.priority}</td>
        <td>${reminder.description}</td>
      </tr>
    `;
  });

  html += `</table>`;
  document.getElementById("reminderTable").innerHTML = html;
}

function clearReminderForm() {
  document.getElementById("title").value = "";
  document.getElementById("priority").value = "";
  document.getElementById("description").value = "";
}
