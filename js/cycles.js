
                                    // 4.1 Цикл while

let i = 0;
while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('На сколько оцените его', '');
          i++;

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}


                                    // 4.2 Цикл do...while

let i = 0;
do {
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('На сколько оцените его', '');
          i++;

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
} while (i < 2);






// Пример применения конструкции switch

const num = 50;

switch (num) {
case 49:
    console.log('Неверно');
    break;
case 100:
    console.log('Неверно');
    break;
case 51:
    console.log('В точку!');
    break;
default:
    console.log('Не в этот раз');
    break;
 
}