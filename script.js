// Grabbing/referencing id
   
   let number = document.querySelector('#number');
      
    let minus = document.querySelector('#minus');
    
    let reset = document.querySelector('#reset');
    
    let plus = document.querySelector('#plus');
    
    
    
 // CREATING THE LOGIC
    
    
    let count = 0;
    
    
 // Count Speech function 
 
 
 function speak(text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // speed (0.1–10)
      utterance.pitch = 1;  // normal tone
      speechSynthesis.speak(utterance);
    } 
    
    
    
    
    
 // Increasing count
 
 plus.addEventListener('click', function(){
        
        number.innerText = count += 1
        
           
        if (count > 0) {
          
        number.style.color = 'green';
       
      } else if (count === 0){
          
        number.style.color = 'black';
      }
      
      speak(count);
      });
    
    
    
 // Decreasing count
 
 minus.addEventListener('click', function(){
        
        number.innerText = count -= 1;
        
               
        if (count < 0) {
          
        number.style.color = 'red';
        
      } else if (count === 0){
          
        number.style.color = 'black';
        
        
      }
      speak(count);
   
      });
    
   
   
 // Reseting count to zero
 
 reset.addEventListener('click', function(){
       
number.innerText = count -= 1 + (count += 1) - 2;
    if (count === 0) {
        
        number.style.color = 'black';
    }
    
    speak(count);
    });    
        