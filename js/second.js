let name = prompt('Ismingini kiritng!');
let name1 = prompt('Bir nimala yozib tashamasdan ismingizni kiriting!');
let surename = prompt('Familiyangizni kiriting!');
let surename1 = prompt('Bu o\'zingizning familiyangizmi?');
let useryear = prompt('Tug\'ilgan yilingizni kiriting!');
let year = 2022;
let age = ( year - useryear);

if(age >= 18) {
    console.log(alert(name1 + ' Siz' + ' ' + age + '  yoshdasiz.Siz Armiyaga boraolasiz! Nima qilib yuribsiz Arimiyaga bormay tezroq boring!!!'))
} else if (age< 18) {
    console.log(alert(name1 + ' Siz' + ' ' +  age + '  yoshdasiz.Siz Armiyaga boraolmaysiz! Hali yoshlik qilasiz XA XA XA'))
}