"use strict";
let numberOfFilms;

const start = function () {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  while (
    numberOfFilms === "" ||
    numberOfFilms === null ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
};
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function filmsRate() {
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
}

filmsRate();

console.log(personalMovieDB);

function personalMovieRate() {
  if (personalMovieDB.count <= 10) {
    alert("Просмотрено мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("Вы - киноман");
  } else {
    alert("Произошла ошибка");
  }
}

personalMovieRate();

function showMyDb() {
  personalMovieDB.privat
    ? console.log("Privat DB")
    : console.log(personalMovieDB);
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const b = prompt(`Ваш любимый жанр под номером ${i}`, "");
    personalMovieDB.genres.push(b);
  }
}

writeYourGenres();

showMyDb();