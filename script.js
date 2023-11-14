"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = +prompt("На сколько оцените его?", "");
  if (a !== null && b !== null && a.length > 0 && a.length < 50 && !isNaN(b)) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

console.log(personalMovieDB);

if (personalMovieDB.count <= 10) {
  alert("Просмотрено мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы - киноман");
} else {
  alert("Произошла ошибка");
}

function returnNeighboringNumbers(num) {
  let result = [];
  result.push(num - 1, num, num + 1);
  return result;
}

console.log(returnNeighboringNumbers(5));

function getMathResult(num, step) {
  let result = "";
  if (typeof step !== "number" || step <= 0) {
    return num;
  } else {
    for (let i = 1; i <= step; i++) {
      if (i !== step) {
        result += `${num * i}---`;
      } else {
        result += `${num * i}`;
      }
    }
  }
  return result;
}

console.log(getMathResult(7, 10));
