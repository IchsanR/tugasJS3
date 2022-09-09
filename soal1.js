/*Buatlah sambungan program menggunakan then catch dan juga
try catch untuk mengecek hari kerja dari kode Asynchronous
dibawah dan jelaskan penggunaan then catch dan try catch
dengan memberikan komentar di bawahnya:*/

const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// Then Catch
cekHariKerja("selasa")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err.message);
  });

// Try Catch
async function cekHari(day) {
  try {
    let result = await cekHariKerja(day);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

cekHari("sabtu");
