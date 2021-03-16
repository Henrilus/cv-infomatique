let telephone = {
   brand: 'nokia3210' ,
   color:'red',
   size:3,
   hasPencil:true, 
   };

let color= telephone.color;

telephone.owner='jackson'
console.log(telephone);


if(telephone.hasPencil=== false) {
console.log('xiaomi');
  }



  class Telephone{
    constructor(brandRecu,coloRecu,sizeRecu,hasPencilRecu){
      this.brand = brandRecu;
      this.color=coloRecu;
      this.size=sizeRecu;
      this.hasPencil=hasPencilRecu;
    }
  }


let xiaomi=new Telephone('xiaomi','black',77,false);
let nokia=new Telephone('nokia3210','red',44,true);
console.log(xiaomi);
console.log(nokia);