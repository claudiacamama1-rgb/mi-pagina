const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let current = '';

    buttons.forEach(btn =>{
      btn.addEventListener('click',()=>{
        const val = btn.textContent;
        if(btn.classList.contains('clear')){
          current='';
          display.textContent='0';
        } else if(btn.classList.contains('eq')){
          try{
            current = eval(current).toString();
            display.textContent=current;
          }catch{
            display.textContent='Error';
            current='';
          }
        } else {
          current+=val;
          display.textContent=current;
        }
      });
    });
    document.getElementById("retro").addEventListener("click", function () {
  // ...
});
