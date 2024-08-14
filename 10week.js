// Task 1
let num = 0;

while(num < 10) {
    num = num + 1;
    console.log(num)
}

// Task 2
let sum = 0; 

for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// Task 3
for (let i = 1; i <= 20; i++) {
    
    if (i % 2 === 0) {
        console.log(i); 
    }
}

// Task 4
let n = 5; 
let result = 1;

for (let i = 1; i <= n; i++) {
    result *= i; 
}
console.log(result)

// Task 5
let number = 9898; 
let summ = 0; 

while (number > 0) {
    summ += number % 10; 
    number = Math.floor(number / 10); 
}
console.log(summ);

// Task 6
let str = "Hello Madina!"; 

for (let char of str) {

    if (char.match(/[a-zA-Z]/)) {
        console.log(char); 
    }
}

// Task 7
let maxNumber = parseInt(prompt("Введите максимальное число:"), 10);

if (isNaN(maxNumber) || maxNumber < 1) {
    console.log("Пожалуйста, введите положительное число.");
} else {
    console.log(`Числа от 1 до ${maxNumber}, кратные 3:`);
    for (let i = 1; i <= maxNumber; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

// Task 8
let stringg = "Заданная строка";
let length = stringg.length;

console.log(`Количество символов в строке: ${length}`);

// Task 9
let array = [2006, 34, 78, 1234, 56, 791, 89];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Task 10
let arrray = [2006, 34, 78, 1234, 56, 791, 89];
let suum = 0;
let i = 0; 

while (i < arrray.length) {
    suum += arrray.length[i];
    i++;
}
console.log("Сумма всех элементов массива:", suum);

 
// Task 11
let array11 = [2006, 34, 78, 1234, 56, -791, 89];
let allPositive = array11.every(element => element > 0);

if (allPositive) {
    console.log("Все элементы положительные.");
} else {
    console.log("Есть отрицательные элементы.");
}

// Task 12
let arrayy = [2006, 34, 78, 1234, 56, 791, 89];
let sum1 = arrayy.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let count1 = arrayy.length;
let average = sum1 / count1;
console.log("Среднее арифметическое значение:", average); 


 
// Task 13
let aarray = [2006, 34, 78, 1234, 56, 791, 89];
let minElement = aarray[0];
for (let i = 1; i < aarray.length; i++) {
    if (aarray[i] < minElement) {
        minElement = aarray[i];
    }
}
console.log("Наименьший элемент массива:", minElement);

// Task 15
let array22 = [2006, -34, 78, -1234, 56, -791, 89];
let positiveArray = array22.filter(number => number >= 0);

console.log("Массив после удаления отрицательных чисел:", positiveArray);


// MEDIUM TASKS
// Task 1
let str1 = "Hello, World!";
let reversedStr = "";
let index = str1.length - 1;

while (index >= 0) {
    reversedStr += str1[index];
    index--;
}
console.log("Перевернутая строка:", reversedStr);

// Task 2
let array3 = [3, 6, 8, 2, 4];
let minNumber = array3[0];  
let index1 = 1;  


while (index1 < array3.length) {
    if (array3[index] < minNumber) {
        minNumber = array3[index1];
    }
    index1++;
}
console.log("Наименьшее число в массиве:", minNumber);

// Task 3
let str22 = "Hello, World!";
let vowels = 'aeiouAEIOU';
let count = 0;
let index2 = 0;

while (index2 < str22.length) {
    if (vowels.includes(str22[index2])) {
        count++;
    }
    index2++;
}
console.log("Количество гласных букв:", count);

// Task 4
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let combinedArray = [];
let index3 = 0;
let index4 = 0;

while (index3 < array1.length) {
    combinedArray.push(array1[index3]);
    index3++;
}
while (index4 < array2.length) {
    combinedArray.push(array2[index4]);
    index4++;
}
console.log("Объединенный массив:", combinedArray);

// Task 5

let array33 = [1, 3, 5, 7, 9, 1, 3, 5, 6, 9];
let uniqueArray = [];
let index5 = 0;

while (index5 < array33.length) {
    if (!uniqueArray.includes(array33[index5])) {
        uniqueArray.push(array3[index5]);
    }
    index5++;
}
console.log("Массив после удаления дубликатов:", uniqueArray);

// Task 6
function isPalindrome(array4) {
    let left = 0;
    let right = array4.length - 1;

    while (left < right) {
        if (array4[left] !== array4[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}
let array4 = [1, 2, 3, 2, 1]; 
console.log("Массив является палиндромом:", isPalindrome(array4));

// Task 7
function isPalindrome(str2) {
    let left = 0;
    let right = str2.length - 1;

    while (left < right) {
        if (str2[left] !== str2[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
let str2 = "racecar"; 
console.log("Строка является палиндромом:", isPalindrome(str2));

// Task 8
function countWords(str3) {
    let count1 = 0;
    let inWord = false;
    let index6 = 0;

    while (index6 < str3.length) {
        if (str3[index6] !== ' ') {
            if (!inWord) {
                count1++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
        index6++;
    }

    return count1;
}
let str3 = "Hello, world! This is a test.";
console.log("Количество слов в строке:", countWords(str3));

// Task 9
let i1 = 7;
while (i1 <= 98) {
    console.log(i1);
    i1 += 7;
}

// Task 10
let N = parseInt(prompt("Введите число N: "), 10);

if (isNaN(N) || n < 1) {
    console.log("Введите корректное положительное число.");
} else {
    let power = 1;

    while (power * 2 <= n) {
        power *= 2;
    }
    console.log("Наибольшая степень двойки, не превосходящая N:", power);
}