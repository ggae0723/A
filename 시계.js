var 사진 = document.createElement('img')
   document.body.append(사진)
   사진.src = 'https://t1.daumcdn.net/cfile/blog/994BB93F5AD305BF02?download';
   사진.width = 1980
   사진.height = 335
   document.body.style.backgroundColor = 'black'
   var 시간 = document.createElement('span')
   document.body.append(시간)
   시간.style.fontSize = 130
   시간.style.marginLeft = 230
   시간.style.color = 'white'
   시간.style.fontFamily = 'Serif'
   var 년도1 = null
   var 년도2 = null
   var 년도3 = null
   var 년도4 = null
   var 년도 = null
   var 시1 = null
   var 시2 = null
   var 시 = null
   var 분1 = null
   var 분2 = null
   var 분 = null
   var 초1 = null
   var 초2 = null
   var 초 = null

   setInterval(function callback(e){
   년도1 = Date()[11]
   년도2 = Date()[12]
   년도3 = Date()[13]
   년도4 = Date()[14]
   년도 = 년도1 + 년도2 + 년도3 + 년도4
   시1 = Date()[16]
   시2 = Date()[17]
   시 = 시1 + 시2
   if (Number(시) - 12 > 9) {
   if (Number(시) - 12 === 10) {
   시 = 10
   }
   if (Number(시) - 12 === 11) {
   시 = 11
      }
      
   }else{
      if (Number(시) === 00) {
         시 = 12
      } else {
         if(시 <= 9) {
            시 = 시.split('')[1]
         } else {
      시 = Number(시) - 12
      시 = '0' + Number(시)
         }
      }
   }
   분1 = Date()[19]
   분2 = Date()[20]
   분 = 분1 + 분2
   초1 = Date()[22]
   초2 = Date()[23]
   초 = 초1 + 초2
   시간.textContent = 년도+'년' + ':' + 시+'시' + ':' + 분+'분' + ':' + 초+'초'
   } ,  25)
