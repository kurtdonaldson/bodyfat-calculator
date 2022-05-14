const deleteBtn = document.querySelectorAll(".deleteButton");
const editBtn = document.querySelectorAll(".editButton");
const updateBtn = document.querySelector(".updateButton");
const viewBtn = document.querySelectorAll(".viewButton");
const clientName = document.querySelector("#clientName");
const saveBtn = document.querySelector("#save-button");
const clientValue = document.querySelector('#clientValue');
const clientRow = document.querySelector('.clientRow');
const clientYES = document.querySelectorAll('.clientYES')




for (const button of viewBtn) {
  button.addEventListener("click", (e) => {
    clientName.innerHTML = e.target.dataset.name;

    for(let i of clientYES){
       if(i.innerHTML == clientName.innerHTML){
         i.style.display = "table-row"
       } else{
        i.style.display = "none"
       }
    }
   
    
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

// updateBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   fetch("/users", {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       name: document.querySelector("#newname").value,
//       oldname: document.querySelector("#oldname").value,
//     }),
//   })
//     .then((res) => {
//       if (res.ok) return res.json();
//     })
//     .then(() => {
//       window.location.reload();
//     });
// });

// saveBtn.addEventListener("click", () => {
//   console.log(document.querySelector("#clientName").innerHTML);
// });

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/users", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.querySelector("#clientName").innerHTML,
      classification: document.querySelector("#classification-populate")
        .innerHTML,
      leanMass: document.querySelector("#leanmass-populate").innerHTML,
      bodyfat: document.querySelector("#bodyfat-populate").innerHTML,
      date: document.querySelector("#today-date").innerHTML,
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then(() => {
      window.location.reload();
    });
});
