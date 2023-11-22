"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMovieDB.count === "" ||
      personalMovieDB.count === null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  filmsRate: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = +prompt("На сколько оцените его?", "");
      if (
        a !== null &&
        b !== null &&
        a.length > 0 &&
        a.length < 50 &&
        !isNaN(b)
      ) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  personalMovieRate: function () {
    if (personalMovieDB.count <= 10) {
      alert("Просмотрено мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы - киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  showMyDb: function () {
    personalMovieDB.privat
      ? console.log("Privat DB")
      : console.log(personalMovieDB);
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      const b = prompt(`Ваш любимый жанр под номером ${i}`, "");
      if (b !== null && b.length > 0) {
        personalMovieDB.genres.push(b);
      } else {
        i--;
      }
    }
    personalMovieDB.genres.forEach((element, index) => {
      console.log(`Любимый жанр номер ${index + 1} это ${element}`);
  });
  },
  toggleVisilibleMyDB: function () {
    personalMovieDB.privat
      ? (personalMovieDB.privat = false)
      : (personalMovieDB.privat = true);
  },
};
personalMovieDB.toggleVisilibleMyDB();
// personalMovieDB.start();
// personalMovieDB.filmsRate();
// personalMovieDB.personalMovieRate();
personalMovieDB.showMyDb();
personalMovieDB.writeYourGenres();

console.log(personalMovieDB);
