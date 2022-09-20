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
// let contraseña = "0"
// let introducir = ""
// let opcion = 0
// let cont = 0
// let saldo = 6000
// const consultar = () => {
//     console.log("este es su saldo: " + saldo)
// }
// const menu = () => {
//     return (parseInt(prompt("elige una opcion:\nOpción 1: sacar dinero\nOpción 2: ingresar dinero\nOpción 3: consultar saldo\nOpción 4: cambiar contraseña\nOpción 5: salir")))
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
//     contraseña = prompt("introduzca la nueva contraseña")
//     introducir = contraseña
//     console.log("contraseña actualizada")
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
//         introducir = prompt("introduce la contraseña")
//         if (introducir === contraseña) {
//             elige()
//         } else {
//             console.log("contraseña incorrecta")
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