const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = e.currentTarget?.username?.value;

  const password = e.currentTarget?.password?.value;

  const data = { username, password };

  try {
    const res = await fetch("http://localhost:8081/api/login", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) throw await res.json();

    const resJson = await res.json();

    const user = resJson.data;

    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "../pages/index.html";
  } catch (err) {
    alert(err?.message);
  }
});
