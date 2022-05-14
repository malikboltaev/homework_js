var a = +prompt('Введите время от 0 до 24')
if(a <= 3){
    alert(a + ' часа ночи')
}else if(a <= 11){
    alert(a + ' часов утра')
}else if(a <= 17){
    alert(a + ' часов дня')
}else if(a <= 23){
    alert(a + ' часов вечера')
}else{
    alert('Error')
}