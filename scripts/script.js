/*var btn = document.getElementById("#list");

btn.addEventListener('click',(e)=>{

    
})
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
   
  var tabel = "<table id=tabelaid   >";
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
  
  
  
   
   
 });