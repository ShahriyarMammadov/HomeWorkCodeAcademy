/* 6. Proqrama daxil edilən məlumatın ədəd və ya  hərf, simvol olduğunu təyin edən proqram tərtib edin. Daxil edilən məlumat yalnız 
1 rəqəm, hərf və ya simvol ola bilər. 
Məsələn: info=6 yazdıqda cavab bu şəkildə olmalıdır:
Daxil edilən məlumat rəqəmdir.

Məsələn: info="a" yazdıqda cavab bu şəkildə olmalıdır: 
Daxil edilən məlumat hərf və ya simvoldur.

Məsələn: info="\" yazdıqda cavab bu şəkildə olmalıdır:
Daxil edilən məlumat hərf və ya simvoldur. */

let a = 12;

if (typeof (a) === "number") {
    console.log("daxil edilen məlumat reqemdir.")
} else if (typeof (a) === "string") {
    console.log("daxil edilen məlumat herf və ya simvoldur.")
} else {
    console.log("melumat yanlisdir!!")
}