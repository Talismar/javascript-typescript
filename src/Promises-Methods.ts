export {};

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min));
}

function awaitAMoment(msg: string | number, timeout: number): Promise<unknown> {
  return new Promise((resolve, reject) => {
    if (typeof msg === "number") {
      reject(new Error("Typeof msg must be a string"));
    }

    setTimeout(() => {
      resolve(msg);
    }, timeout);
  });
}

// Promise.all Promise.race Promise.resolve Promise.reject

/*
  So resolve o array of promises se não estiver dado erro em nenhuma
*/
// const promises = [
//   awaitAMoment("5", 1000),
//   awaitAMoment("5", 1000),
//   awaitAMoment("5", 1000),
// ];

// Promise.all(promises)
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promises = [
//   awaitAMoment("1", 1000),
//   awaitAMoment("2", 10),
//   awaitAMoment("3", 10000),
//   "Talismar",
// ];

/* Resolver a primeira response e devolve imediatamente,
mas as promisses ainda continuar sendo resolvida */
// Promise.race(promises)
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function baixaPagina() {
  const inCache = false;

  if (inCache) {
    return Promise.resolve("Pagina em cache");
  } else {
    return Promise.reject(awaitAMoment("1", 100));
  }
}

baixaPagina()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    err.then((value: string) => {
      console.log("Ret", value);
    });
  })

  .catch((err1) => {
    console.log("Error 1", err1);
  });

// ## Methods
// Promise.all()
// Promise.race() - Retorna a primeira promessa primeiro e continuar execução
// Promise.resolve
// Promise.reject
