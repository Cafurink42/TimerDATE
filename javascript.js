function Button(){
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = document.querySelector("#firstDate").value;
    const secondDate = document.querySelector("#secondDate").value;

    let valueFirstDate = Date.parse(firstDate);
    let valueSecondDate = Date.parse(secondDate);
    
    
    let result = Math.round(Math.abs((valueFirstDate - valueSecondDate) / oneDay));
    document.getElementById('resultado').innerHTML = result + " Dias";

}