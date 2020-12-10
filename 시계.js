 var 사진 = document.createElement('img')
   document.body.append(사진)
   사진.src = 'https://t1.daumcdn.net/cfile/blog/994BB93F5AD305BF02?download';
   사진.width = 1980
   사진.height = 300
   document.body.style.backgroundColor = 'black'
   var 시간 = document.createElement('span')
   document.body.append(시간)
   시간.style.fontSize = 135
   시간.style.marginLeft = 444
   시간.style.color = 'white'
   시간.style.fontFamily = 'Cursive'
   var 시간2 = document.createElement('div')
   document.body.append(시간2)
   시간2.style.fontSize = 135
   시간2.style.marginLeft = 325
   시간2.style.color = 'white'
   시간2.style.fontFamily = 'Cursive'
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
   var 날1;
   var 날2;
   var 월;
   var r = 0
   setInterval(function callback(e){
 월 = Date()[4] + Date()[5] + Date()[6]
   if(월 === "Jan") {
      월 = '1'
} else if (월 === 'Feb') {
   월 = '2'
} else if (월 === 'Mar') {
   월 = '3'
} else if (월 === 'Apr') {
   월 = '4'
} else if (월 === 'May') {
   월 = '5'
} else if (월 === 'Jun') {
   월 = '6'
} else if (월 === 'Jul') {
   월 = '7'
} else if (월 === 'Aug') {
   월 = '6'
} else if (월 === 'sep') {
   월 = '8'
} else if (월 === 'Oct') {
   월 = '10'
} else if (월 === 'Nov') {
   월 = '11'
} else if (월 === 'Dec') {
   월 = '12'
}
      날1 = Date()[8]
      날2 = Date()[9]
      날 = 날1 + 날2
   년도1 = Date()[11]
   년도2 = Date()[12]
   년도3 = Date()[13]
   년도4 = Date()[14]
   년도 = 년도1 + 년도2 + 년도3 + 년도4
   시1 = Date()[16]
   시2 = Date()[17]
   시 = 시1 + 시2
   if (Number(시) > 12) {
      if(시 === '24') {
         시 = '12'
         r = 1
      }else if(시 === '23') {
         시 = '11'
         r = 1
      } else if (시 === '22') {
         시 = '10'
         r = 1
      } else {
      시 = '0' + String(Number(시) - 12)
      r = 1
      }
   }
  if(Number(시) > 9) {
      if (Number(시) === 12) {
       시 = '12'
       r = 1
      }
      if (Number(시) === 11) {
         시 = '11'
         r = 0 
        }
        if (Number(시) === 10) {
         시 = '10'
         r = 0 
        }
      }
 if(Number(시) < 10) {
    if (Number(시) === 0) {
       시 = '0'
    } else {
    시 = "0" + 시[1]
    r = 0  
    }
   }  

   분1 = Date()[19]
   분2 = Date()[20]
   분 = 분1 + 분2
   초1 = Date()[22]
   초2 = Date()[23]
   초 = 초1 + 초2
   if (r === 0) {
      시간.textContent = 년도+'년' + 월 + '월'  + 날 + '일'
      시간2.textContent = 시+'시' + ':' + 분+'분' + ':' + 초+'초' + '(오전)'
   } else if(r === 1) {
      시간.textContent = 년도+'년' + 월 + '월'  + 날 + '일'
      시간2.textContent = 시+'시' + ':' + 분+'분' + ':' + 초+'초' + '(오후)'
   }
   } ,  25)
