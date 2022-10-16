var el1 = document.querySelector('.el1');
var el2 = document.querySelector('.el2');
var el3 = document.querySelector('.el3');
var el4 = document.querySelector('.el4');
var el5 = document.querySelector('.el5');
var slide1 = document.querySelector('.slide1') 
var slide2 = document.querySelector('.slide2')
var cup = document.querySelector('.cup')
var tea = document.querySelector('.tea')
var tag1 = document.querySelector('.tag1')
var el6 = document.querySelector('.el6')
var slide4= document.querySelector('.slide4')

var status 	= 1;
var count =0;

// dragElement(el1,1);
// dragElement(el2,2);
// dragElement(el3,3);
// dragElement(el4,4);
// dragElement(el5,5);

if (typeof window.orientation !== 'undefined' ){
  dragElementMobile(el1,1);
  dragElementMobile(el2,2);
  dragElementMobile(el3,3);
  dragElementMobile(el4,4);
  dragElementMobile(el5,5);

} 
else{
  dragElement(el1,1);
  dragElement(el2,2);
  dragElement(el3,3);
  dragElement(el4,4);
  dragElement(el5,5);

}

function dragElementMobile(elmnt, items) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
  } else {
    elmnt.ontouchstart = dragMouseDown;
  }

  function dragMouseDown(e) {
    e.preventDefault();
    e = e.touches[0] || window.event;
    
    pos3 = e.clientX;
    pos4 = e.clientY;
    // document.onmouseup = closeDragElement;
    document.ontouchmove = elementDrag;
  }

  function elementDrag(e) {
    e = e.touches[0] || window.event;
    // e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    leftSpace = elmnt.offsetLeft - pos1;
    // console.log(leftSpace)

  draggedResult( elmnt, leftSpace, items);   
  }

  function closeDragElement() {
    document.ontouchend = null;
    document.touchmove = null;
  }
}



function dragElement(elmnt, items) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      leftSpace = elmnt.offsetLeft - pos1;
      // console.log(leftSpace)

    draggedResult( elmnt, leftSpace, items);   
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
}


function draggedResult(elmnt, leftSpace, items){

  if(leftSpace > 10){
    switch(items){
      case 1: 
      count += items;
      // el1.classList.remove("pluse")
      el1.classList.add('slide1_ani')
      setTimeout(function(){
        el1.classList.add("hidden")
      },500)
      
      break;

      case 2:
        items+=1;
        el2.classList.add('slide1_ani')
        setTimeout(function(){
          el2.classList.add("hidden");
        },500)
        
        break;

        case 3:
          items+=1;
          el3.classList.add('slide1_ani')
          setTimeout(function(){
            el3.classList.add("hidden");
          },500)
          break;

          case 4:
            items+=1;
            el4.classList.add('slide1_ani');
            setTimeout(function(){
              el4.classList.add("hidden");
            },500)
            break;

            case 5:
              items+=1;
              el5.classList.add('slide1_ani')
              setTimeout(function(){
                el5.classList.add("hidden");
              },500)
              break;      
    }
    if(items > 5)
    {
      setTimeout(function(){
        cup.classList.add("hidden")
        tea.classList.remove("hidden")
        setTimeout(slide_2, 2000);
      }, 500)

    
    }
 
  }

}
function slide_2(){
  tag1.classList.add('hidden')
  tea.classList.add('ani2')
  el6.classList.remove('hidden')
  el6.classList.add('ani3')
  setTimeout(function(){
    slide1.classList.add('hidden')
    el6.classList.add('hidden')
    tea.classList.add('hidden')
    slide4.classList.remove('hidden')
    slide4.classList.add('show')
  },1000)
}
