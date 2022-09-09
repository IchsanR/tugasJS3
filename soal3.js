// 1
const cekAngka = (angka) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (angka % 2 === 1) {
        resolve("Angka ganjil");
      } else {
        reject("Angka genap");
      }
    }, 3000);
  });
};

cekAngka(5)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

//2
let janji = "bernyanyi";

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (janji === "bernyanyi") {
      resolve("Penonton senang");
    } else {
      reject("Anda tidak bernyanyi");
    }
  }, 2000);
});

p.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
