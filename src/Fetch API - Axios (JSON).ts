// fetch("./pessoas.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     loadElementOfPage(response);
//   });

function loadElementOfPage(
  json: { nome: string; email: string; estado: string }[],
) {
  console.log(json);
  const table = document.createElement("table");

  for (const iterator of json) {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerHTML = iterator.nome;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerHTML = iterator.email;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerHTML = iterator.estado;
    tr.appendChild(td3);

    table.appendChild(tr);
  }

  const results = document.querySelector(".results");
  results?.appendChild(table);
}
function axios() {
  throw new Error("Function not implemented.");
}
