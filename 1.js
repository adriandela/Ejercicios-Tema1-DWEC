// EJ1
// let numero1 = 5;
// let numero2 = 8;
// if (numero2 > numero1) {
//     alert("numero1 no es mayor que numero2");
// }
// if (numero2 % 2 == 0) {
//     alert("numero2 es positivo");
// }
// if (numero1 % 2 == 0 || numero1 !=0) {
//     alert("numero1 es negativo o distinto de cero");
// }
// if (numero1++ < numero2) {
//     alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }
//a)
// if (numero2 > numero1) {
//     console.log("numero1 no es mayor que numero2");
// }
// if (numero2 % 2 == 0) {
//     console.log("numero2 es positivo");
// }
// if (numero1 % 2 == 0 || numero1 !=0) {
//     console.log("numero1 es negativo o distinto de cero");
// }
// if (numero1++ < numero2) {
//     console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }
// b)
// if (numero2 > numero1) {
//     document.write("numero1 no es mayor que numero2");
// }
// if (numero2 % 2 == 0) {
//     document.write("numero2 es positivo");
// }
// if (numero1 % 2 == 0 || numero1 !=0) {
//     document.write("numero1 es negativo o distinto de cero");
// }
// if (numero1++ < numero2) {
//     document.write("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }
//2)
// let num = parseInt(prompt("introduce un numero"))
// let par = 0
// let impar = 0
// let sumapar = 0
// let positivo = 0
// let negativo = 0
// let contador = 0
// let multiplicacion = 1
// while (num != 0) {

//     if (num % 2 == 0) {
//         console.log(num)
//         par++
//         sumapar += num;
//     } else {
//         impar++
//     }
//     if (num >= 0) {
//         positivo++
//         multiplicacion = multiplicacion * num
//     } else {
//         negativo++
//     }
//     contador++;
//     num = parseInt(prompt("introduce un numero"))
// } 
// console.log("num par "+par+" num impar "+impar+" suma par "+ sumapar +" num pos "+positivo+ " num nega "+negativo+" producto par "+multiplicacion+" total "+contador)
// 3)
//  for (let index = 0; index < 5; index++) {
//     let numhoras = parseInt(prompt("introduce el numero de horas"))
//     let preciohora = parseInt(prompt("introduce el precio de las horas"))
//     let horasextra = 0;
//     let horasnormales = numhoras * preciohora;
//     let nombre = prompt("introduce el nombre")
//     let direccion = prompt("introduce la direccion")
//     if (numhoras > 40) {
//         horasextra=(numhoras-40)*(preciohora * 1.5)
//         horasnormales=40*preciohora
//     }
//     document.write("salario"+(index+1)+": "+ (horasnormales+horasextra) +" "+nombre+" "+direccion)
//     console.log("salario"+(index+1)+": "+ (horasnormales+horasextra) +" "+nombre+" "+direccion)

//  }
// 4)
// let num1 = parseInt(prompt("introduce un numero"))
// let num2 = parseInt(prompt("introduce otro numero"))
// if (typeof(num1)==='number' && typeof(num2)==='number' && num1 % 2 != 0 && num2 % 2 != 0) {
//     for (num1 ; num1 < num2; num1++){
//         if (num1 % 2 ==0) {
//             console.log(num1)
//         }

//     }
// }
//5)
//6)
// let num = parseInt(prompt("escribe un numero"))
// if (!isNaN(num) && num > -1 && num < 10){
//     for (let index1 = 0; index1 <= num; index1++) {
//         for (let index2 = 0; index2 <= 10; index2++) {
//             console.log(index1+" * "+index2+" = "+index2*index1)

//         }
//     }
// }
//7)
// let num = parseInt(prompt("elige un numero"))
// let res = 1
// console.log(num)
// if (num > 0 && num < 150) {
//     for (let index = num; index > 0; index--) {
//         res = res*index
//     }
//     console.log(num+"! = "+res)
// }
//8)
// let contrase??a = "0"
// let introducir = ""
// let opcion = 0
// let cont = 0
// let saldo = 6000
// const consultar = () => {
//     console.log("este es su saldo: " + saldo)
// }
// const menu = () => {
//     return (parseInt(prompt("elige una opcion:\nOpci??n 1: sacar dinero\nOpci??n 2: ingresar dinero\nOpci??n 3: consultar saldo\nOpci??n 4: cambiar contrase??a\nOpci??n 5: salir")))
// }
// const sacar = () => {
//     let extraer = prompt("elige cuanto dinero extraer")
//     if (extraer >= saldo) {
//         console.log("la operacion no se puede realizar")
//     }
//     else {
//         saldo = saldo - extraer
//         consultar()
//     }
// }
// const ingresar = () => {
//     let meter = parseInt(prompt("elige cuanto dinero ingresar"))
//     saldo = saldo + meter
//     consultar()
// }

// const cambiar = () => {
//     contrase??a = prompt("introduzca la nueva contrase??a")
//     introducir = contrase??a
//     console.log("contrase??a actualizada")
// }
// const elige = () => {
//     switch (opcion = menu()) {
//         case 1:
//             sacar();
//             break;
//         case 2:
//             ingresar()
//             break;
//         case 3:
//             consultar()
//             break;
//         case 4:
//             cambiar()
//             break;
//     }
// }
// while (cont != 3) {
//     do {
//         introducir = prompt("introduce la contrase??a")
//         if (introducir === contrase??a) {
//             elige()
//         } else {
//             console.log("contrase??a incorrecta")
//             cont++
//             opcion = 5
//         }
//     } while (opcion != 5);
// }
//PRUEBA FUNCION CALLBACK
// const sumatorio = (num1,cb) =>{
//     console.log(num1)
//     console.log(cb)
// console.log(num1 + cb (num1, 5))
// }
// sumatorio (10,(num2, num3)=>{
//     return num2 + num3
// })

//ARRAYS
//  const puntuaciones = [1,3,5,7,9]
// // const reales = [1.5,3.5,5.5,7.5,9.5]
// // const nombres = ["maria","adrian","alberto"]
// // for (const punto of puntuaciones) {
// //     console.log(punto)
// // }
// let suma = 0
// puntuaciones.forEach((puntos) => {


//     suma = suma + puntos
//     console.log(suma)
// });
//9)
// meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
// fecha=[21,8,2022]
// console.log(fecha[0]+" de "+meses[fecha[1]]+" de "+fecha[2])
//10)
// let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
// let numero = parseInt(prompt("introduzca su dni sin letra"))
// let letra = ""
// if (numero > 0 && numero < 99999999) {
//     let letraindicada = prompt("indica la letra")
//     letra = letras[numero % 23]
//     if (letra == letraindicada) {
//         console.log("el dni es correcto")
//     } else {
//         console.log("dni incorrecto, la letra correcta es: " + letra)
//     }
// } else {
//     console.log("el numero proporcionado no es valido")
// }
//11)
// let notas = []
// let max = 0
// let min = 11
// let mediasuspensos = 0
// let mediaaprobados = 0
// let suspensos = 0
// let aprobados = 0
// let cont1 = 0
// let cont2 = 0
// for (let index = 0; index < 10; index++) {
//     notas.push(parseInt(prompt("introduce la nota")))
//     if (notas[index] < 1 || notas[index] > 10) {
//         console.log("nota incorrecta")
//         index = 10
//     }
// }
// notas.forEach(element => {
//     if (element > max) {
//         max = element
//     }
//     if (element < min) {

//         min = element
//     }
//     if (element < 5) {
//         suspensos = suspensos + element
//         cont1++
//         mediasuspensos = suspensos / cont1
//     } else {
//         aprobados = aprobados + element
//         cont2++
//         mediaaprobados = aprobados / cont2
//     }
// });
// console.log(max)
// console.log(min)
// console.log(mediaaprobados)
// console.log(mediasuspensos)
//12)
// let num = []
// let comprobar = true
// for (let index = 0; index < 10; index++) {
//     num[index] = parseInt(prompt("introduce un n??mero"))
// }
// let menor = num[0]
// let mayor = num[0]
// num.forEach(element => {
//     if (typeof (element) == "number") {
//         comprobar = true
//         if (element <= menor) {
//             menor = element
//         }
//         if (element >= mayor) {
//             mayor = element
//         }
//     } else {
//         comprobar = false
//     }
// });
// if (comprobar == true) {
//     console.log("elemento menor: " + menor)
//     console.log("elemento mayor: " + mayor)
// }