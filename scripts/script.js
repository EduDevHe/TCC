/*var btn = document.getElementById("#list");

btn.addEventListener('click',(e)=>{

    
})
*/

fetch("json/lpi.json")
 .then(function(resp){
     return resp.json();
 })
 .then(function(json){
   var coMandos = json.comandos;
   var fuCoes = json.funcoes;
   
   var objetosFuncoes =Object.keys(fuCoes);
   var mapaDeObjetos = objetosFuncoes.map((objetosFuncoes)=>{ 
     return objetosFuncoes + " " + fuCoes[objetosFuncoes];
   });
  console.log(mapaDeObjetos);
  
  var tabel = "<table>";
   tabel += "<tr><td>COMANDOS</td></tr>"
  
   coMandos.forEach(osComandos => {
     //console.log(osComandos);
    tabel += "<li> " +`${osComandos} \n` + "<li>" ;
  });
  
  mapaDeObjetos.forEach(asFuncoes =>{
    //console.log(asFuncoes);
    tabel += "<tr>" + "<li> " +`${asFuncoes} \n` + "<li>" + "</tr>"  ;
  });
   
   tabel += "</table>"; 
   document.querySelector('#tabela').innerHTML = tabel;
   
 });