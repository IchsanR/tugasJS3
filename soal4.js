/*Buatlah program menggunakan method fetch untuk
menampilkan semua name (hanya name nya saja) dari REST API
dibawah ini
https://jsonplaceholder.typicode.com/users */

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((post) => {
      console.log(post.username);
    });
  })
  .catch((err) => {
    console.log(err);
  });
