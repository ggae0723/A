
var 숫자배열 = [];
for(var i=1001; i<10000; i++){
  var 수 = String(i);
  if(수[0] == 수[1] || 수[0] == 수[2] || 수[0] == 수[3] || 수[1] == 수[2] || 수[1] == 수[3] || 수[2] == 수[3]) {}
  else {
    숫자배열.push(i);
  }
}

var 숫자 = 숫자배열[Math.ceil(Math.random() * 4536) - 1];

var 단어 = document.createElement('div');
document.body.append(단어);
단어.textContent = '4글자 숫자야구게임(맞춰봐라)'

var 폼 = document.createElement('form');
document.body.append(폼)

var 입력창 = document.createElement('input');
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '입력';
폼.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);
var 변수 = 0

var 볼 = 0
if (입력창.value[0] === String(숫자[1])) {
  볼 = 볼 + 1
   }
    if (입력창.value[1] === String(숫자)[0]) {
      볼 = 볼 + 1
       }
    if (입력창.value[0] === String(숫자)[1]) {
        볼 = 볼 + 1
         }
    if (입력창.value[0] === String(숫자)[2]) {
     볼 = 볼 + 1
    }
    if (입력창.value[2] === String(숫자)[0]) {
      볼 = 볼 + 1
       }
    if (입력창.value[0] === String(숫자)[3]) {
     볼 = 볼 + 1
    }
    if (입력창.value[3] === String(숫자)[0]) {
      볼 = 볼 + 1
       }
    if (입력창.value[1] === String(숫자)[2]) {
    볼 = 볼 + 1
    }
    if (입력창.value[2] === String(숫자)[1]) {
      볼 = 볼 + 1
       }
    if (입력창.value[1] === String(숫자)[3]) {
     볼 = 볼 + 1
    }
    if (입력창.value[3] === String(숫자)[1]) {
      볼 = 볼 + 1
       }
    if (입력창.value[2] === String(숫자)[3]) {
    볼 = 볼 + 1
    }
    if (입력창.value[3] === String(숫자)[2]) {
      볼 = 볼 + 1
       }
  
var 스트라이크 = 0
if (String(숫자)[0] === String(입력창.value[0])) {
  스트라이크 = 스트라이크 + 1
   }
   
   if (String(숫자)[1] === String(입력창.value[1])) {
    스트라이크 = 스트라이크 + 1
   }
   
   if (String(숫자)[2] === String(입력창.value[2])) {
    스트라이크 = 스트라이크 + 1
   }
   
   if (String(숫자)[3] === String(입력창.value[3])) {
    스트라이크 = 스트라이크 + 1
   }
   var 아웃 = 4 - Number(스트라이크) - Number(볼)
버튼.addEventListener('click' , function 콜백함수(e) {
    변수 = 변수 + 1
  e.preventDefault();
  for(var i=0; i<10; i++){
    if(입력창.value.split(i).length > 2){
      결과창.textContent = '같은숫자가 두개 이상이면 안되요!';
      return;
    }
  }
  e.preventDefault();
  if (Number(입력창.value) === Number(숫자)) {
    결과창.textContent = '축하합니다';
    입력창.focus();
 } else {
  
 e.preventDefault();
  var 스트라이크 = 0
  var 볼 = 0
    if (입력창.value[1] === String(숫자)[0]) {
      볼 = 볼 + 1
       }
    if (입력창.value[0] === String(숫자)[1]) {
        볼 = 볼 + 1
         }
    if (입력창.value[0] === String(숫자)[2]) {
     볼 = 볼 + 1
    }
    if (입력창.value[2] === String(숫자)[0]) {
      볼 = 볼 + 1
       }
    if (입력창.value[0] === String(숫자)[3]) {
     볼 = 볼 + 1
    }
    if (입력창.value[3] === String(숫자)[0]) {
      볼 = 볼 + 1
       }
    if (입력창.value[1] === String(숫자)[2]) {
    볼 = 볼 + 1
    }
    if (입력창.value[2] === String(숫자)[1]) {
      볼 = 볼 + 1
       }
    if (입력창.value[1] === String(숫자)[3]) {
     볼 = 볼 + 1
    }
    if (입력창.value[3] === String(숫자)[1]) {
      볼 = 볼 + 1
       }
    if (입력창.value[2] === String(숫자)[3]) {
    볼 = 볼 + 1
    }
    if (입력창.value[3] === String(숫자)[2]) {
      볼 = 볼 + 1
       }
       if (String(숫자)[0] === String(입력창.value[0])) {
        스트라이크 = 스트라이크 + 1
         }
         
         if (String(숫자)[1] === String(입력창.value[1])) {
          스트라이크 = 스트라이크 + 1
         }
         
         if (String(숫자)[2] === String(입력창.value[2])) {
          스트라이크 = 스트라이크 + 1
         }
         
         if (String(숫자)[3] === String(입력창.value[3])) {
          스트라이크 = 스트라이크 + 1
         }
         var 아웃 = 4 - Number(스트라이크) - Number(볼)
      입력창.focus();
      결과창.textContent = '스트라이크 :' + String(스트라이크) + '   ' + '볼 :' + String(볼) + '   ' + '아웃 :' + String(아웃)
 }
  }
);