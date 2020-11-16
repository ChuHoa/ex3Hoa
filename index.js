let hangxe=["Yamaha","Kawasaki","Ducati","Triumph","Honda"]
// alert(hangxe[2])
// hangxe[hangxe.length-1]="Mer"
// let a=hangxe.shift();
// alert(a)
// a=hangxe.pop();
// alert(a)
// alert(hangxe)

// for (let i = 0; i < hangxe.length; i++) {
//     alert(hangxe[i]+" o vi tri " +i);
// }

// for (let i = 0; i < 100; i++) {
//     if (i%5==0) {
//         console.log(i);
//     }
// }
// console.log(" ");
// for (let i = 0; i < 10; i++) {
//     if (i%2==1) {
//         console.log(i)
//     }
// }
// console.log(" ");
// for (let i = 0; i < 20; i++) {
//     if (i%2==0) {
//         console.log(i)
//     }
// }


// let myObject={

//     name:"tao",
//     email:"hoalamoa@gmail.com",
//     age:"24",
//     password:"123456"

// }

// console.log("Ten cua m la: "+myObject.name)
// console.log(myObject['age'])
// myObject.name="Hoa"
// console.log("Ten cua m la: "+myObject.name)

// let inventory={
//     'gold':500,
//     'pouch':['flint','twine','gemstone'],
//     'backpack':['xylophone','dagger','bedroll','bread loaf']
// }
// inventory.pocket=['seashell','strange berry','lint']
// //inventory['pocket']=['seashell','strange berry','lint'] cach 2
// inventory.gold+=50
// delete inventory.pouch
// inventory.backpack.splice(1,1)
// console.log(inventory)

let myheading=document.getElementById("heading1")
console.dir(myheading)
myheading.textContent="Hello"
myheading.style.color="pink"
myheading.style.backgroundColor="black"
myheading.style.fontSize="50px"
