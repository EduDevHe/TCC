/*var btn = document.getElementById("#list");

btn.addEventListener('click',(e)=>{

    
})
*/


 /*
   //transforma o objeto json.funcoes em um array
   var arrayFuncoes =Object.keys(fuCoes);
   // mapeia o array
   var mapaArrayFuncoes = arrayFuncoes.map((arrayFuncoes)=>{ 
     return arrayFuncoes + " " + fuCoes[arrayFuncoes];
   });
  console.log(mapaArrayFuncoes);
  */

   /*
   // percorre o array comandos do json.comandos
   coMandos.forEach(osComandos => {
     //console.log(osComandos);
    tabel += "<li> " +`${osComandos} \n` + "<li>" ;
  });
  //percorre o objeto funcoes que foi tansformado em array
  mapaArrayFuncoes.forEach(asFuncoes =>{
    //console.log(asFuncoes);
    tabel += "<tr>" + "<li> " +`${asFuncoes} \n` + "<li>" + "</tr>"  ;
  });
   */



//pega o json/lpi.json
fetch("json/lpi.json")
 .then(function(resp){
     return resp.json();
 })
 .then(function(json){
   //pega o json.comando e atribui em uma variavel
   var coMandos = json.comandos;
   //pega o json.funcoes e atribui em uma varivel
   var fuCoes = json.funcoes;
   
   var coMandosNovos = json.comandosNovos;

   var fuCoesNovos = json.fucoesNovos;

  var tabel = "<table id=tabelaid  class= table table-hover >";
   tabel += "<thead> <tr> <th> COMANDO </th>";
   tabel += "<th>  FUNÇÃO </th> </tr> <thead>";
   tabel += "<tbody>";

   for(var i = 0; i < coMandos.length;i++){
     var c = coMandos[i];
     var f = fuCoes[c];
     tabel += " <tr>   <td> " +`${c}`+ "</td>  <td id=td> " + `${f}` + "</td>  </tr>";
   }
   tabel += "</tbody>";
   tabel += "</table>"; 
   document.querySelector('#tabela').innerHTML = tabel;

  let btn = document.querySelector('#btn-criar');
  let vinputC = document.querySelector('#id-comando');
  let vinputF = document.querySelector('#id-funcao');
 


   btn.addEventListener('click',(event)=>{
  
     let inputComando = vinputC.value
     let inputFucao = vinputF.value
      
    for(var i = 0 ; i < coMandos.length; i++){
      var c = coMandos[i];
      var f = fuCoes[c];

      }

      if(inputComando === "" || inputFucao === ""){
        alert("PRENCHA TODOS OS CAMPOS")
      }else{

      if(c !== inputComando && inputComando !== fuCoes.hasOwnProperty(c)){
        coMandos.push(inputComando);
        coMandosNovos.push(inputComando);
        fuCoes[inputComando]= inputFucao;
        fuCoesNovos[inputComando]= inputFucao;
    }else{
      alert("COMANDO OU FUNÇÃO JA EXISTENTE")
    }
  }
     console.log(coMandosNovos,coMandos,fuCoesNovos,fuCoes); 
     console.log(inputComando , inputFucao);
    
    
  
  
   });
  
  
   
   
 });

   
