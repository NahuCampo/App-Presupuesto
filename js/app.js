const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Monotributo', 1500)
];

const egresos = [
    new Egreso('Comida', 800.00),
    new Egreso('Impuestos', 2500)
];

let cargarApp = () =>{
    cargarCabecero();
}

let totalIngresos = () =>{
    let totalIngresos = 0;
    for(let ingreso of ingresos){
        totalIngresos += ingreso.valor;
    }
    return totalIngresos;
}

let totalEgresos = () =>{
    let totalEgresos = 0;
    for(let egreso of egresos){
        totalEgresos += egreso.valor;
    }
    return totalEgresos;
}

let cargarCabecero= () =>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / (totalEgresos()+totalIngresos());
    let porcentajeIngreso = totalIngresos() / (totalEgresos()+totalIngresos());
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
    document.getElementById('porcentajeEgreso').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('porcentajeIngreso').innerHTML = formatoPorcentaje(porcentajeIngreso);
}

const formatoMoneda = (valor) =>{
    return valor.toLocaleString('es-AR',{style: 'currency', currency:'ARS', minimumFractionDigits: 2});
}

const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('es-AR',{style: 'percent', minimumFractionDigits: 2});

}