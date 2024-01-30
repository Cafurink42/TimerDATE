function Button(){
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = document.querySelector("#firstDate").value;
    const secondDate = document.querySelector("#secondDate").value;

    let valueFirstDate = Date.parse(firstDate);
    let valueSecondDate = Date.parse(secondDate);
    
    
    let dif = Math.round(Math.abs((valueFirstDate - valueSecondDate) / oneDay));
    console.log(dif);
    //document.getElementById('resultado').innerHTML = dif + " Dias";

}