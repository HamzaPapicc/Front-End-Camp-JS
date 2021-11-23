//text="Please visit Microsoft!"

//newText=text.replace("Microsoft", "Javascript")

//console.log(text);
//console.log(newText);

//text="DoBaR dAn SvImA"

//var1=text.toLowerCase()
//var2=text.toUpperCase()

//console.log(var1)
//console.log(var2)

// text="Hello";
// console.log(text);

// var1=text.concat(" ", "world");
// console.log(var1);

// aaaaaaaaaaaaaaa

// var1=['Banana', 'Orange', 'Apple'];

// var2 = var1.join('JS');

// console.log(var1);
// console.log(var2)

// var1=['Banana', 'Orange', 'Apple', 'Mango']
// console.log(var1)

// vracenaVrednost=var1.pop()

// console.log(var1)
// console.log(vracenaVrednost)

// var1=['Banana', 'Orange', 'Apple', 'Mango']

// var2 = var1.splice(0, 2)
// console.log(var2)

// if (5>7) {
//     console.log('Nesto bruuuda');
// }
// console.log('Nas dalji kod');

// a=17

// if (a !== 12) {
//     console.log('true');
// }
// console.log('Nas dalji kod');

// alert('GASNAMAX')

// brojGodina=prompt('Unesite broj vasih godina:')

// if (brojGodina >= 18) {
//     console.log('Vi ste punoletni.')
// }
// if (brojGodina < 18) {
//     console.log('Vi niste punoletni.')
// }

// unetiBroj=prompt('Unesi broj godina')

// alert(`Ovo je ${unetiBroj} nesto`)

// unetiBroj=prompt('Unesi broj godina')

// console.log(unetiBroj)

// console.log(typeof unetiBroj)

// a=parseInt(unetiBroj)

// console.log(a)

// console.log(typeof a)

// ShoppingList=['Hleb', 'Mleko']

// odabir= parseInt(prompt('Odabir'))

// if(odabir === 1) {
//     Namirnica=prompt('Sta hocete da dodate?')
//     ShoppingList.push(Namirnica)
//     console.log(ShoppingList)
// }else if(odabir === 2) {
//     ShoppingList.pop()
//     console.log(ShoppingList)
// }else {
//     alert("Uneliste pogresan broj")
// }


// ShoppingList=['Hleb', 'Mleko']

// odabir= parseInt(prompt('Odabir'))

// if(odabir === 1) {
//     Namirnica=prompt('Sta hocete da dodate?')
//     if (Namirnica.length < 8) {
//         ShoppingList.push(Namirnica)
//     }else {
//         alert('Namirnica je predugacka')
//     }
//     console.log(ShoppingList)
// }else if(odabir === 2) {
//     ShoppingList.pop()
//     console.log(ShoppingList)
// }else {
//     alert("Uneliste pogresan broj")
// }

// broj=parseInt(prompt('Unesite vas broj'))

// if(broj%2===0) {
//     alert('Vas broj je paran')
// }else {
//     alert('Vas broj je neparan')
// }

// broj=prompt('Unesite vas broj')

// if(broj % 3 === 3 && broj % 5 === 0) {
//     console.log('FizzBuzz')
// } else if (broj % 3 === 0) {
//     console.log("Fizz")
// } else if (broj % 5 === 0) {
//     console.log('Buzz')
// }

// x=parseInt(prompt('Unesite prvi broj'))

// y=parseInt(prompt('Unesite drugi broj'))

// if (x > y) {
//     console.log(`${x} je veci broj`)
// } else if (x < y) {
//     console.log(`${y} je veci broj`)
// } else if (x === y) {
//     console.log(`${x} i ${y} su jednaki brojevi`)
// }

// unos = prompt('Unesi dan u nedelji')

// switch (unos) {
//     case 'Ponedeljak': {
//         console.log('Danas je ponedeljak')
//         break
//     }
//     case 'Utorak': {
//         console.log('Danas je utorak')
//         break
//     }
//     case 'Sreda': {
//         console.log('Danas je sreda')
//         break
//     }
//     case 'Cetvrtak': {
//         console.log('Danas je cetvrtak')
//         break
//     }
//     case 'Petak': {
//         console.log('Danas je petak')
//         break
//     }
//     case 'Subota': {
//         console.log('Danas je subota')
//         break
//     }
//     case 'Nedelja': {
//         console.log('Danas je nedelja')
//         break
//     }
//     default: {
//         console.log('Pogresan unos')
//     }
// }

// a = Math.random()*10;

// console.log(a)

// a = []

// unos=parseInt(prompt('Koliko elemenata zelite?'))
// for (j=0; j < unos; j++) {
//     vasElement=prompt(`Unesite element ${j + 1}`)
//     if (vasElement.length > 4) {
//         a.push(vasElement)
//     }
// }

// for (i=0; i < a.length; i++) {
//     switch (a[i]) {
//         case 'Banana':
//             console.log('Voce je zuto')
//             break
//         case 'Jabuka':
//             console.log('Voce je crveno')
//             break
//         case 'Grozdje':
//             console.log('Voce je zeleno')
//             break
//         default:
//             console.log('Nepoznato')
//     }
// }

// cars = ['BMW','Audi','Polo']

// for (i=0; i<cars.length; i++) {

// }

// brojevi=[]

// unos=parseInt(prompt('Koliko brojeva zelite da unesete?'))
// for (j=0; j < unos; j++) {
//     vasBroj=parseInt(prompt('Unesite broj'))
//     brojevi.push(vasBroj)
// }

// maxNum=brojevi[0];

// for (vasBroj of brojevi) {
//     if (vasBroj > maxNum) {
//         maxNum = vasBroj
//     }
// }

// console.log(maxNum)

// pocetnaVrednost=parseInt(prompt('Unesite pocetnu vrednost'))
// krajnjaVrednost=parseInt(prompt('Unesite krajnju vrednost'))
// brojevi=[]

// for(i=pocetnaVrednost; i <=krajnjaVrednost; i++) {

// }

// nesto=''
// krajnjaVrednost=parseInt(prompt('Unesite krajnju vrednost'))

// for(i=0;i<=krajnjaVrednost;i++) {
//     nesto+='*'
//     console.log(nesto)
// }

// tekst=''

// for(i=1; i<6; i++) {
//     for(j=0; j < i ;j++) {
//         tekst+='*'
//     }
//     console.log(tekst)
//     tekst=''
// }


// for (i=5; i>0; i--) {
//     console.log(i)
// }


// rec='dajgi'
// drugaRec=''

// for(i=rec.length; i>0; i--) {
    
// }

// prvaVrednost=parseInt(prompt('Unesite prvu vrednost'))
// drugaVrednost=parseInt(prompt('Unesite drugu vrednost'))

// if(prvaVrednost%drugaVrednost===0) {
//     console.log()
// }

// unos = parseInt(prompt('Pogodi broj'))
// zamisljeniBroj = 6

// while (unos !== zamisljeniBroj) {
//     unos = parseInt(prompt('Pokusaj opet'))
// }

// unos=parseInt(prompt('Unesite broj'))

// zamisljeniBroj=Math.floor(Math.random() *11)

// while(true) {
//     if (unos===zamisljeniBroj) {
//         alert('Pogodili ste broj')
//         break
//     } else if (unos < zamisljeniBroj) {
//         unos=parseInt(prompt('Broj je manji of zamisljenog broja'))
//     } else if (unos > zamisljeniBroj) {
//         unos=parseInt(prompt('Broj je veci of zamisljenog broja'))
//     }
// }

// happyNum = [];

// limit = 5;
// +
// pocetniBroj = 145;

// pomocnaVar = 0;

// zbir=0

// while(true) {
//     while(true) {
//         pomocnaVar = pocetniBroj.toString();
//         for(i = 0; i < pomocnaVar.length; i++) {
//             zbir += parseInt(pomocnaVar[i]) ** 2;
//             if(zbir === 1) {
//                 console.log(pocetniBroj);
//                 break;
//             } else if(zbir === 4) {
//                 break;
//             }

//         }
//     }
    
//     console.log(pocetniBroj);
//     pocetniBroj++;

// }


// var1 = {
//     ime: 'daris',
//     prezime: 'gorcevic',
//     godine: 16
// }
// console.log(var1)

// ime = prompt('Unesite vase ime')
// prezime = prompt('UNesite vase prezime')

// var1 = {
//     firstname:ime,
//     lastname:prezime
// }
// console.log(var1)

// person= {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 50,
//     eyeColor: 'blue'
// }
// console.log(person)

// delete person.lastName

// console.log(person)

// unos = parseInt(prompt('Unesite vas broj'))

// console.log(unos-=unos*2)

// unos = prompt('Proveri da li je revc palindrom')

// var1 = ""

// for (i = unos.length - 1; i >= 0; i--) {
//     var1 += unos[i] 
// }

// if (var1 === unos) {
//     console.log('Palindrom je')
// } else {
//     console.log('Nije palindrom')
// }


// unos = prompt('Proverite koliko vasa rec ima slova o')

// pomocnaVar = 0

// for (i=0; i < unos.length; i++) {
//     if (unos[i] === 'o') {
//         pomocnaVar+=1
//     }
// }
// if(pomocnaVar === 0) {
//     console.log('Vasa rec nema slova o')
// } else {
//     console.log(`Vasa rec ima ${pomocnaVar} slova o`)
// }

