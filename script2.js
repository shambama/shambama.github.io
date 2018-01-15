var company = prompt('Какая компания создала JavaScript?', '500');

(company == '500') ?
    alert('Да, верно') : alert('Неправильно');

var c2=+company;
if (isNaN(+company)){alert('1');}
else {alert('2');}


var i = 0;
while (2 >= i) {
    confirm(i);
    i++;
}

for (var i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
}