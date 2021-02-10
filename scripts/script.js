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
   for(var i = 0; i < coMandos.length; i++){
    tabel += "<td>"+`\n ${coMandos[i]} \n`+"</td>";
   }
   tabel += "</table>"; 
   document.querySelector('#tabela').innerHTML = tabel;
   
 });