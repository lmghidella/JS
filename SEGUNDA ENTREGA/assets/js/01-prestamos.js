class Prestamo { 
    constructor(capital, interes,cuotas,amortizacion) {
        this.capital = capital;
        this.interes = interes;
        this.cuotas=cuotas; 
        this.amortizacion;
    }
    calcular()
    {
    let total_prestamo=0;
    let saldo=capital;
    let cuota_pura=capital/cuotas;
    let valor_cuota=cuota_pura+cuota_pura*tasa/100;
    document.write('<h5> Sistema de amortización: '+amortizacion+'</h5>');//POR AHORA NO DISCRIMINO CALULO ENTRE
    //SISTEMA FRANCES / ALEMAN
    for (let i=0;i<cuotas;i++){
        console.log('Cuota nº', i+1);
        console.log('Valor Cuota: ',valor_cuota.toFixed(2));
        saldo=saldo-cuota_pura;
        console.log('Saldo Capital: ', saldo.toFixed(2));
        document.write('<p>Valor de cuota nº ' +(i+1)+': $'+valor_cuota.toFixed(2) +'-----------------Saldo de capital: $'+saldo.toFixed(2)+'</p>');
        total_prestamo=total_prestamo+valor_cuota;
    }
    console.log('Total prestamo',total_prestamo);
    document.write('<h5> Capital Solicitado: $'+capital+'</h5>');
    return total_prestamo;
    }
}


let capital = prompt('Ingrese el capital a solicitar en $: ');
let tasa= prompt('Ingrese la tasa de Interes por cuota en %');
let amortizacion;
let cuotas;
console.log('probando');
do{
    amortizacion=prompt('Ingrese la tasa de amortizacion FRANCES/ALEMAN');
    amortizacion=amortizacion.toLocaleUpperCase();
    
    console.log(amortizacion);
    if (amortizacion!='FRANCES' && amortizacion!='ALEMAN')
        alert('SISTEMA DE AMORTIZACIÒN INVÀLIDO!!');
    
}while((amortizacion!='FRANCES' && amortizacion!='ALEMAN'))


do {
cuotas=prompt('Ingrese la cantidad de cuotas');
}while(cuotas==0);//verifico que la cantidad de cuotas no sea igual a 0
//Aclaro que el metodo de calculo no aplica exactamente una amortizacion frances/ aleman sino que uso un sistema de
//interes X para probar lo aprendido hasta el momento.
let prestamo1=new Prestamo (capital, tasa,cuotas,amortizacion);
document.write('<h4> Valor total del prestamo: $'+prestamo1.calcular().toFixed(2)+'   -----<h4>');



