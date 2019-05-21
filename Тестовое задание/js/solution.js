function sum() { // задаем функцию для обработки события
  var firstNumber = parseFloat(document.getElementById('firstNumber').value); //задаем первую переменную со значением, которое будет введенно в поле для ввода №1, приводим значения из строкового типа в числовые
  var secondNumber = parseFloat(document.getElementById('secondNumber').value); //аналогично первому
  if (isNaN(firstNumber)==true) firstNumber=0.1; //необходимо для того, чтобы при отсуствии ввода, в этих полях имелось значение, требуемое по умолчанию в задании
  if (isNaN(secondNumber)==true) secondNumber=0.2; //аналогично выше изложенному
  var result = firstNumber + secondNumber; //создаем переменную результата, в которой изложены условия для выполнения суммы
  document.getElementById('result').innerHTML = firstNumber + "+" + secondNumber + "=" + result; //вставляем значение результата в заранее определенный (div)
  alert(result);
}
