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

awaitAMoment(5, 1000)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err.message);
  });
