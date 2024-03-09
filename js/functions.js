function checkLengthString (string, maxLength) {
  return string.length <= maxLength;
}

checkLengthString('проверяемая строка', 20);
checkLengthString('проверяемая строка', 18);
checkLengthString('проверяемая строка', 10);

function checkPalindrom (string) {
  string = string.toUpperCase().replaceAll(' ' , ' ');
  let newString = ' ';
  for(let i = string.length - 1; i >= 0; i--) {
    newString += string[1];
  }
  return string === newString;
}

checkPalindrom('топот');
checkPalindrom('ДовОд');
checkPalindrom('Кекс');
checkPalindrom('Лёша на полке клопа нашёл');
