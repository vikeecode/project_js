var istatus = document.querySelector('h5')

var btn = document.querySelector("#add")
let check = 0
//let removeFreiend = document.querySelector('#remove')
btn.addEventListener('click', function(){
    if(check ===0){
      istatus.innerHTML= "Freinds"
      istatus.style.color = "green"
      btn.innerHTML="Remove Friend"
      check = 1
    }else{
        istatus.innerHTML= "Stranger"
      istatus.style.color = "red"
      btn.innerHTML="Add Friend"
      check = 0 
    }
}, false)
// removeFreiend.addEventListener('click', function(){
//     istatus.innerHTML="Stranger"
//     istatus.style.color="red"
// }, false)