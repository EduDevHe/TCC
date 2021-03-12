<?php
  $dados = $_POST['dados'];
  $arq = 'dados.txt';
  $arqopen = fopen($arq,'w+');
  fwrite($arqopen,$dados);
  fclose($arqopen);


?>