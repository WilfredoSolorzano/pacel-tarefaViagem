AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.querySelector('.navbar-toggler');
    var navMenu = document.querySelector('#menu-navegacao');

    toggleButton.addEventListener('click', function() {
        navMenu.classList.toggle('collapse');
    });
});

const dataDoEvento=new Date("jun 12, 2024 19:00:00");
const timeStamDoEvento=dataDoEvento.getTime();

const contaAsHoras=setInterval(function(){
    const agora=new Date();
    const timeStamDoAtual=agora.getTime();

    const distaciaAteOEvento=timeStamDoEvento-timeStamDoAtual;

    const diaEmMs=1000*60*60*24;
    const horaEmMs=1000*60*60;
    const minutoEmMs=1000*60;

    const diasAteOEvento= Math.floor(distaciaAteOEvento / diaEmMs);
    const horasAteOEvento=Math.floor((distaciaAteOEvento% diaEmMs) / horaEmMs)
    const minutosAteOEvento=Math.floor((distaciaAteOEvento%horaEmMs)/minutoEmMs)
    const segundosAteOEvento=Math.floor((distaciaAteOEvento% minutoEmMs)/1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML=`${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}`;

    if(distaciaAteOEvento<0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML="evento Finalizado"
    }
},1000);
