// navlink section mouseover and mouseout effect 
const navlist=document.querySelector('.navlist');
const links=document.querySelectorAll('.link')

navlist.addEventListener('mouseover',function(e){
    const checked=e.target;
    const siblings=checked.closest('.navlist').querySelectorAll('.link')
    siblings.forEach(
      ele=>{
          if(ele !== checked){
            ele.style.opacity=0.5
          }
      }
    )
})

navlist.addEventListener('mouseout',function(e){
    const checked=e.target;
    const siblings=checked.closest('.navlist').querySelectorAll('.link')
    siblings.forEach(
      ele=>{
          if(ele !== checked){
            ele.style.opacity=1
          }
      }
    )

})


// module section 
const openacBtn=document.querySelector('.last');
const model=document.querySelector('.module');
const close=document.querySelector('#close')
// open module 
openacBtn.addEventListener('click',function(){
    model.style.display='block'
})
// close module 
close.addEventListener('click', function(){
    model.style.display='none'
})

// down and upper arrow's navigation
const down=document.querySelector('.down')
const upper=document.querySelector('.upper')
const section3=document.querySelector('#section--3')
down.addEventListener('click',function(e){
    const s1coords= e.target.getBoundingClientRect()
    const showsection3=section3.getBoundingClientRect()
    window.scrollTo(
        {
            left: s1coords.left + window.pageXOffset,
            top: showsection3.top + window.pageYOffset,
            behavior:'smooth'
        })
})




upper.addEventListener('click', function(e){
    const s2coords=e.target.getBoundingClientRect();
    const showtop=navlist.getBoundingClientRect();
    window.scrollTo(
        {
            right:s2coords.right - window.pageXOffset,
            top: showtop.top - window.pageYOffset,
            behavior:'smooth'
        })
    
})

// the mainbanner section 
let j=0
const slides=[]
slides[0] = 'pics/slidepic1.jpg';
slides[1] = 'pics/slidepic2.jpg';
slides[2] = 'pics/slidepic3.jpg';
slides[3] = 'pics/slidepic4.jpg';
slides[4] = 'pics/slidepic5.jpg';
slides[5] = 'pics/slidepic6.jpg';
slides[6] = 'pics/slidepic7.jpg';
slides[7] = 'pics/slidepic8.jpg';
const slide=document.querySelector('#slide');
const leftslide=document.querySelector('#leftslide');
const rightslide=document.querySelector('#rightslide')

leftslide.addEventListener('click',function(){
    slide.src=slides[j--]
    if(j< 0){j=7}
  
})

rightslide.addEventListener('click',function(){
    slide.src=slides[j++]
    if(j> slides.length-1){
        j=0
    }
})

// event delegation, add event listener to the common parent element. 
// navigation to the corresponding section
navlist.addEventListener(
    'click',function(e){
      if(e.target.classList.contains('last'))return 
      if(e.target.classList.contains('link')){
        e.preventDefault();
        const id=e.target.getAttribute('href')
        document.querySelector(id).scrollIntoView({behavior:'smooth'})
      }
    }
)


// tabbed component
const btnsDelegator=document.querySelector('.btns')
const btns=document.querySelectorAll('.btn') 
const contents=document.querySelectorAll('.content')

btnsDelegator.addEventListener('click', 
    function(e){
    const btn=e.target
    if(!btn)return;
    btns.forEach(
        btn=>btn.classList.remove('btn-active')
    )
    contents.forEach(
        content=>content.classList.remove('display-active')
    )
    if(e.target.classList.contains('btn')){
        e.preventDefault();    
        btn.classList.add('btn-active')
    }

    document.querySelector(`.operations__content--${btn.dataset.tab}`).classList.add('display-active')

    }
   
    
)


