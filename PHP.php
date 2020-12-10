<html>
<head> </head>
<body>
<script>
<?php
  function get($url){
    $ch = curl_init();                                 //curl 초기화
	curl_setopt($ch, CURLOPT_URL, $url);               //URL 지정하기
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);    //요청 결과를 문자열로 반환 
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);      //connection timeout 10초 
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);   //원격 서버의 인증서가 유효한지 검사 안함
 
	$response = curl_exec($ch);
	curl_close($ch);
 
	return $response;
  }
$dr = get("https://search.naver.com/search.naver?query=미국+달러+환율");
echo str_replace('\n', '\\n', $dr);
?>
</script>
</body>
</html>
