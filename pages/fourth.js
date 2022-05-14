var one = +prompt('Введите первое число')
var two = +prompt('Введите второе число')
var three = +prompt('Введите третье число')
if((one > two && one < three) || (one < two && one > three)){
    alert('Среднее число = ' + one)
}else if((two > one && two < three) || (two < one && two > three)){
    alert('Среднее число = ' + two)
}else if((three > one && three < two) || (three < one && three > two)){
    alert('Среднее число = ' + three)
}else if(one == two && one == three && two == three){
    alert('Они равны')
}else{
    alert('Error')
}