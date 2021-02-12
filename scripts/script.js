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
   
   var tabel = "<table>";
   tabel += "<tr><td>COMANDOS</td></tr>"
 
   coMandos.forEach(osComandos => {
     console.log(osComandos);
    tabel += "<li>" +`${osComandos} \n` + "<li>" ;
  });
  
   
   tabel += "</table>"; 
   document.querySelector('#tabela').innerHTML = tabel;
   
 });