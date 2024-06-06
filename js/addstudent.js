const addStudentForm = document.getElementById("addStudentForm");

addStudentForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = e.currentTarget?.name?.value;

  const email = e.currentTarget?.email?.value;

  const rollNo = e.currentTarget?.rollNo?.value;

  const contact = e.currentTarget?.contact?.value;

  const regNo = e.currentTarget?.regNo?.value;

  const faculty = e.currentTarget?.faculty?.value;

  const address = e.currentTarget?.address?.value;

  const dateOfBirth = e.currentTarget?.dateOfBirth?.value;

  const joinedDate = e.currentTarget?.joinedDate?.value;

  const gender = e.currentTarget?.gender?.value;

  const data = {
    name,
    email,
    rollNo,
    contact,
    regNo,
    faculty,
    address,
    dateOfBirth,
    joinedDate,
    gender,
  };

  try {
    const res = await fetch("http://localhost:8081/api/student", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) throw await res.json();

    window.location.href = "../pages/index.html";
  } catch (err) {
    alert(err?.message);
  }
});
