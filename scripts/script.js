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
   var funCoes = json.funcoes;
   
   var coMandosNovos = json.comandosNovos;

   var funCoesNovos = json.fucoesNovos;

  var tabel = "<table id=tabelaid  class= table table-hover >";
   tabel += "<thead> <tr> <th> COMANDO </th>";
   tabel += "<th>  FUNÇÃO </th> </tr> <thead>";
   tabel += "<tbody>";

   for(var i = 0; i < coMandos.length;i++){
     var c = coMandos[i];
     var f = funCoes[c];
     tabel += " <tr>   <td> " +`${c}`+ "</td>  <td id=td> " + `${f}` + "</td>  </tr>";
   }
   tabel += "</tbody>";
   tabel += "</table>"; 
   document.querySelector('#tabela').innerHTML = tabel;

  let btnCriar = document.querySelector('#btn-criar');
  let btnDeletar = document.querySelector('#btn-deletar');
  let btnEnviar = document.querySelector('#btn-enviar');
  let vinputC = document.querySelector('#id-comando');
  let vinputF = document.querySelector('#id-funcao');
 

  
   
   btnCriar.addEventListener('click',(event)=>{
    let inputComando = vinputC.value
    let inputFucao = vinputF.value
    
    for(var i = 0 ; i < coMandos.length; i++){
      var c = coMandos[i];
      var f = funCoes[c];

      }

      if(inputComando === "" || inputFucao === ""){
        alert("PREENCHA TODOS OS CAMPOS")
      }else{

      if(c !== inputComando && inputComando !== funCoes.hasOwnProperty(c)){
        coMandos.push(inputComando);
        coMandosNovos.push(inputComando);
        funCoes[inputComando]= inputFucao;
        funCoesNovos[inputComando]= inputFucao;
    }else{
      alert("COMANDO OU FUNÇÃO JÁ EXISTENTE")
    }
  }
     console.log(coMandosNovos,coMandos,funCoesNovos,funCoes); 
     console.log(inputComando , inputFucao);
    
    
      
   });
  
    btnDeletar.addEventListener('click',(event)=>{
    let inputComando = vinputC.value
    let inputFucao = vinputF.value


      if(inputComando !== ""){

        coMandosNovos.forEach(cmn =>{
          console.log(cmn);
          if(inputComando === cmn){
            coMandosNovos.splice(coMandosNovos.indexOf(inputComando),1);
            delete funCoes[inputComando];
          }if(inputComando !== ""){
            coMandos.forEach(cm=>{
              if(inputComando === cm && cm === cmn){
                coMandos.splice(coMandos.indexOf(inputComando),1);
                delete funCoesNovos[inputComando];
              }
            });
          }
          console.log(coMandosNovos,coMandos,funCoesNovos,funCoes);

        });


      }

/*
      //codigo quebrado;
    for(var i = 0; i < coMandosNovos.length; i++){
      var cN = coMandosNovos[i];
   

      for(var i = 0 ; i < coMandos.length; i++){
       var c = coMandos[i]; 

       if(inputComando === c && cN === inputComando){
        coMandos.splice(coMandos.indexOf(inputComando),1);
        coMandosNovos.splice(coMandosNovos.indexOf(inputComando),1);
        delete funCoes[inputComando];
        delete funCoesNovos[inputComando];
        //coMandos.splice(coMandos.indexOf(inputComando),1);        
      }

    }
  }
*/
    //console.log(coMandosNovos,coMandos,funCoesNovos,funCoes);

   }); 
    
   btnEnviar.addEventListener('click',(event)=>{
    

    /*if(inputComando === "" && inputFucao == ""){
      alert("PREENCHA TODOS OS CAMPOS")
    */
      let NewComands = JSON.stringify(json);
      console.log(NewComands);
      var form = '<input type="text" name="dados" maxlength=100000 value="'+NewComands+'">';
      
      document.querySelector('#form').innerHTML = form;  
  });








 });

   
