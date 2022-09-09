/*Buat program menggunakan callback function untuk melanjutkan
dan menampilkan semua bulan menggunakan method map */

const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"));
    }
  }, 4000);
};

const x = (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    data.map((item) => console.log(item));
  }
};
getMonth(x);
