import React from "react";
import CatalogItem from "./CatalogItem";

function Catalog() {
  const books = [
    ["buku1.jpg", "Menguasai Pemrograman Berorientasi Objek", "Ade Rahmat Iskandar", "Informatika", 2020],
    ["buku2.jpg", "Dasar-Dasar Pemrograman dengan .NET", "Ade Rahmat Iskandar", "Informatika", 2019],
    ["buku3.jpg", "Metodologi Pengembangan Sistem Informasi", "Samiaji Sarosa", "Indeks", 2017],
    ["buku4.png", "Struktur Data", "Rosa A.S", "Modula", 2018],
    ["buku5.jpg", "Dasar Pemrograman Python 3", "Abdul Kadir", "Andi Publisher", 2018],
    ["buku6.jpeg", "Sistem Basis Data Dan Sql", "Didik Setiyadi", "Mitra Wacana Media", 2020],
    ["buku7.jpg", "Perancangan Basis Data Teori", "Suhartini", "Deepublish", 2020],
    ["buku8.jpg", "Teori Dan Praktek Sistem Operasi", "Zaid Romegar Mair", "Deepublish", 2018]
  ];

  return (
    <div className="container py-3">
      <h2 className="pb-2 mb-4 mt-4 border-bottom">Our Books</h2>
      <div className="row">
        {books.map((book, index) => (
          <div className="col-sm-6 col-lg-4 mb-4 book" key={index}>
            <CatalogItem book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;