[...document.querySelectorAll(".tag")].forEach((item)=> item.addEventListener('click',()=>{
   
   if(item.classList.contains("tag-active")){
    item.classList.remove("tag-active");
    item.childNodes[1].classList.add("display-none") 

   }else{
       item.classList.add("tag-active")
       item.childNodes[1].classList.remove("display-none") 

   }
    
}))


   
    // 
    


