/*sampleNews = `As software developers, the natural tendency is to start developing applications based on your own 
hands-on experience and knowledge right away. However, overtime issues in the application arise, 
adaptations to changes, and new features happen.`

4. sampleNews mətnində olan vergül və nöqtələrin sayını təyin edən proqram yazın.*/

let a = 0;
for (let i = 0; i < sampleNews.length; i++) {
    const bosluq = sampleNews[i];
    if (bosluq !== "," && bosluq !== ".") {
        continue;
    };
    a++;
};
console.log("Cumlede olan vergul ve noqtelerin sayi= ", a)