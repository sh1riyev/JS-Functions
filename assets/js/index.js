"use strict";

// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// n=21;

function isDividev(number) {
  if (number % 21 == 0) {
    console.log("Is Divided");
  } else {
    console.log("Cannot be divided by 3 and 7");
  }
}

// isDividev(n)

// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

// n=5;

function factorial(number) {
  let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac *= i;
  }
  console.log(fac);
}

// factorial(n)

// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// let arr=[1,2,6,3,5]

function powerOf(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (element % 2 == 0) sum += Math.pow(element, 2);
  });
  console.log(sum);
}

// powerOf(arr)

// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e,
// ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.

function logIn(mail, password) {
  if (mail == "cavid@code.edu.az" && password == 12345) {
    console.log("Girish olundu");
  } else {
    console.log("Mail ve yax password sehvdir");
  }
}

// let mail="ilgar@gmail.com"
// let pass=12345

// logIn(mail,pass)

// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// let arr = [1, 2, 3, 4, 5];

function sumOfOdd(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (element % 2 != 0) {
      sum += element;
    }
  });
  console.log(sum);
}

// sumOfOdd(arr);

// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

function countOfEven(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (element % 2 == 0) {
      sum++;
    }
  });
  console.log(sum);
}

// let arr = [1, 2, 3, 4, 5];

// countOfEven(arr);

// 8) Icerisinde name, surname, age, email olan bir nece student objectleriniz var.
// Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.
//      1) Yashi 18-25 araliginda olan telebelerin sayi.
//      2) Emailinde "c" herfi olan studentlerin sayi.

let students = [
  {
    Name: "Ilgar",
    Surname: "Shiriyev",
    Age: 26,
    Email: "shiriyev@gmail.com",
  },
  {
    Name: "Cavid",
    Surname: "Bashirov",
    Age: 31,
    Email: "cavid@gmail.com",
  },
  {
    Name: "Ceyhun",
    Surname: "Aliyev",
    Age: 23,
    Email: "ceyhun@gmail.com",
  },
  {
    Name: "Anar",
    Surname: "Aliyev",
    Age: 22,
    Email: "anar@gmail.com",
  },
];

function checkAge(studens) {
  let count = 0;

  studens.forEach((student) => {
    if (student.Age > 18 && student.Age < 25) {
      count++;
    }
  });

  console.log(count);
}

// checkAge(students);

function checkEmail(students) {
  let count = 0;
  students.forEach((student) => {
    let mail = student.Email.split("@");
    if (mail[0].includes("c")) {
      count++;
    }
  });
  console.log(count);
}

checkEmail(students);

// 9) Function yazacaqsiz, Functiona parametr olaraq string gelecek. Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.

var text = "salam";

function upperCaseChar(string) {
  let upperString = string[0].toUpperCase() + string.slice(1);
  return upperString;
}

// console.log(upperCaseChar(text));
