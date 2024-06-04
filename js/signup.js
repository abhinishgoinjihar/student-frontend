const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = e.currentTarget?.name?.value;

  const username = e.currentTarget?.username?.value;

  const password = e.currentTarget?.password?.value;

  const data = { name, username, password };

  try {
    const res = await fetch("http://localhost:8081/api/register", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) throw await res.json();
  } catch (err) {
    alert(err?.message);
  }
});
