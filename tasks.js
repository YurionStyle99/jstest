// Место для первой задачи
function calculateVolumeAndArea(num) {
  if (!isNaN(num) && num > 0 && num % 1 === 0) {
    return `Объем куба: ${num * num * num}, площадь всей поверхности: ${
      6 * (num * num)
    }`;
  } else {
    return "При вычислении произошла ошибка";
  }
}

console.log(calculateVolumeAndArea(15));

function getCoupeNumber(num) {
  if (num > 36 || num == 0) {
    return "Таких мест в вагоне не существует";
  } else if (!isNaN(num) && num % 1 === 0 && num > 0) {
    return Math.ceil(num / 4);
  } else {
    return "Ошибка. Проверьте правильность введенного номера места";
  }
}
console.log(getCoupeNumber(0));

// Место для первой задачи
function getTimeFromMinutes(time) {
  if (
    typeof time === "number" &&
    time > -1 &&
    time < 600 &&
    Number.isInteger(time)
  ) {
    if (Math.floor(time / 60) === 1) {
      return `Это ${Math.floor(time / 60)} час и ${time % 60} минут`;
    } else if (Math.floor(time / 60) < 5 && Math.floor(time / 60) !== 0) {
      return `Это ${Math.floor(time / 60)} часа и ${time % 60} минут`;
    } else {
      return `Это ${Math.floor(time / 60)} часов и ${time % 60} минут`;
    }
  } else {
    return "Ошибка, проверьте данные";
  }
}
console.log(getTimeFromMinutes(50.5));

function findMaxNumber(a, b, c, d) {
  const numbers = [a, b, c, d];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === undefined || typeof numbers[i] !== "number") {
      return 0;
    }
  }
  return Math.max(a, b, c, d);
}

console.log(findMaxNumber(10, 3, 4, -97));

function fib(numbers) {
  if (typeof numbers !== "number" || isNaN(numbers) || numbers === 0) {
    return "";
  }
  if (numbers === 1) {
    return "0";
  }
  let fib = [0, 1];
  for (let i = 1; i < numbers - 1; i++) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return `${fib.join(",")}`;
}

console.log(fib(0));

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (plan) {
    const {
      age,
      skills: { languages },
    } = plan;
    return `Мне ${age} и я владею языками:${languages.join(" ").toUpperCase()}`;
  },
};

function showExperience(plan) {
  return plan.skills.exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
  const lang = plan.skills.programmingLangs;
  let result = "";
  if (Object.keys(lang).length === 0) {
    return "";
  } else {
    for (let key in lang) {
      result += `Язык ${key} изучен на ${lang[key]}\n`;
    }
  }
  return result;
}

console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  if (arr.length === 0) {
    return "Семья пуста";
  } else {
    return `Семья состоит из: ${arr.join(' ')}`
  }
}

console.log(showFamily(family))

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  if (Object.keys(arr).length === 0) {
    return "";
  } else {
    arr.forEach(element => {
     return console.log(element.toLowerCase())
    });
  }
}

console.log(standardizeStrings(favoriteCities))

const someString = 'This is some strange string';

function reverse(str) {
if(typeof(str)!=='string'){
  return "Ошибка!"
}else{
  const arr = [...str].reverse().join('');
  return arr;
}
}

console.log(reverse(someString))

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
let result = 'Доступные валюты:\n';
if(arr.length === 0){
  return 'Нет доступных валют';
}
const filtredCurr = arr.filter(element => element !== missingCurr);
for (let key in filtredCurr) {
  result += `${filtredCurr[key]}\n`;
}
return result;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'))