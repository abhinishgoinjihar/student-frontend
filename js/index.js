/**
 * @typedef {Object} Props
 * @property {string} search
 */

/**
 *
 * @param {Props} props
 * @return {Promise<void>}
 */
async function run({ search = "" }) {
  let students = [];

  const res = await fetch(`http://localhost:8081/api/student?search=${search}`);

  if (res.ok) {
    students = (await res.json()).result;
  }

  const studentTable = document.getElementById("student-table-body");

  studentTable.innerHTML = "";

  for (const student of students) {
    const row = document.createElement("tr");

    const rollNoData = document.createElement("td");
    rollNoData.innerText = student.rollNo;
    row.appendChild(rollNoData);

    const regNoData = document.createElement("td");
    regNoData.innerText = student.regNo;
    row.appendChild(regNoData);

    const nameData = document.createElement("td");
    nameData.innerText = student.name;
    row.appendChild(nameData);

    const emailData = document.createElement("td");
    emailData.innerText = student.email;
    row.appendChild(emailData);

    const address = document.createElement("td");
    address.innerText = student.address;
    row.appendChild(address);

    const contact = document.createElement("td");
    contact.innerText = student.contact;
    row.appendChild(contact);

    const gender = document.createElement("td");
    gender.innerText = student.gender;
    row.appendChild(gender);

    const dateOfBirth = document.createElement("td");
    dateOfBirth.innerText = new Date(student.dateOfBirth).toLocaleDateString();
    row.appendChild(dateOfBirth);

    const joinedDate = document.createElement("td");
    joinedDate.innerText = new Date(student.joinedDate).toLocaleDateString();
    row.appendChild(joinedDate);

    studentTable.appendChild(row);
  }
}

run({ search: "" });

document.getElementById("searchInput").addEventListener("input", async (e) => {
  await run({ search: e.currentTarget.value });
});
