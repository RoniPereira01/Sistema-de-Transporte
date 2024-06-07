
function calcularValores() {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const quantidade = parseFloat(row.querySelector('.quantidade').value) || 0;
        const unitBase = parseFloat(row.querySelector('.unit-base').value) || 0;
        const imposto = parseFloat(row.querySelector('.imposto').value) || 0;
        const unitFinal = unitBase + imposto;
        const total = quantidade * unitFinal;
        
        row.querySelector('.unit-final').value = unitFinal.toFixed(2);
        row.querySelector('.total').value = total.toFixed(2);
    
    
    });
}


function enviar(){
const enviar =  document.querySelector("#Enviar")
alert("Dados enviado com sucesso")
console.log(enviar)
}


//esse codigo ele apenas faz para uma imagem


// document.getElementById('imagem-produto').addEventListener('click', function() {
//     document.getElementById('input-file').click();
// });

// document.getElementById('input-file').addEventListener('change', function(event) {
//     const file = event.target.files[0];
//    for(const total = 5; i<=10; i++){
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             document.getElementById('imagem-produto').src = e.target.result;
//         }
//         reader.readAsDataURL(file);
//     }
//    }
// });


//esse codigo ele  faz para 10 imagens
for (let i = 1; i <= 10; i++) {
    let imagem = document.getElementById(`imagem-produto-${i}`);
    let inputFile = document.getElementById(`input-file-${i}`);
    
    imagem.addEventListener('click', function() {
        inputFile.click();
    });
    
    inputFile.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagem.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });
}
