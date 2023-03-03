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

async function run() {
  try {
    const response = await awaitAMoment(123, 1000);
    console.log("Running", response);
  } catch (error) {
    console.log(error);
  }
}

run();
