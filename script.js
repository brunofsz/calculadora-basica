let visor = document.getElementById("visor");
let ope
let n 
function captura_value(botao){
  let n1 = botao.value;
  console.log(n1);


  
  visor.innerHTML = visor.innerHTML + n1;
}
function del(){
visor.innerHTML = visor.innerHTML.slice(0, -1);

            };

            function op(value) {
              ope = value;
              n = visor.innerHTML;
               visor.innerHTML = " ";
            };

            function igual() {
                
                if (ope === "+" ){
                    visor.innerHTML = parseInt(visor.innerHTML) + parseInt(n);
                };
                if (ope === "-" ){
                    visor.innerHTML = parseInt(n) -  parseInt(visor.innerHTML);
                };
                if (ope === "^" ){
                    visor.innerHTML = parseInt(n) ** parseInt(visor.innerHTML) ;
                };
                if (ope === "×" ){
                    visor.innerHTML = parseInt(visor.innerHTML) * parseInt(n);
                };
                if (ope === "÷" ){
                  visor.innerHTML =   parseInt(n) / parseInt(visor.innerHTML);
                };

            };
            function apaga(){
                visor.innerHTML = " ";
            }