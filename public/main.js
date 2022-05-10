const deleteBtn = document.querySelectorAll(".deleteButton");
const editBtn = document.querySelectorAll(".editButton");
const updateBtn = document.querySelector(".updateButton");
const viewBtn = document.querySelectorAll(".viewButton");
const clientName = document.querySelector("#client-name");
const saveBtn = document.querySelector("#save-button");

for (const button of viewBtn) {
  button.addEventListener("click", (e) => {
    clientName.innerHTML = e.target.dataset.name;
    console.log(e.target.dataset.name);
  });
}

for (const button of deleteBtn) {
  button.addEventListener("click", (e) => {
    console.log(e.target.dataset);
  });
}

for (const button of deleteBtn) {
  button.addEventListener("click", (e) => {
    console.log(e.target.dataset);
    fetch(`/users`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target.dataset.name,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then(() => {
        window.location.reload();
      });
  });
}

for (const button of editBtn) {
  button.addEventListener("click", (e) => {
    console.log(e.target.dataset);
  });
}

for (const button of editBtn) {
  button.addEventListener("click", (e) => {
    document.getElementById("oldname").value = e.target.dataset.name;
    document.getElementById("newname").value = e.target.dataset.name;
  });
}

updateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/users", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.querySelector("#newname").value,
      oldname: document.querySelector("#oldname").value,
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then(() => {
      window.location.reload();
    });
});
