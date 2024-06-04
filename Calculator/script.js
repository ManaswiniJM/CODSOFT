let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string="";
let arr = Array.from(buttons);
arr.forEach(button=> {
    button.addEventListener('click',(e)=>{
        let lastChar = string.charAt(string.length - 1); 
        if(e.target.innerHTML=="="){
            string=eval(string);
            input.value=string;
            string="";
        }
        else if(e.target.innerHTML=='AC')
        {
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='D')
        {
            string=string.substring(0, string.length-1);
            input.value=string;
        }
        else if (e.target.innerHTML === '.' && lastChar === '.') {
            // Check if the last character is already a decimal point
            return;
        }
        else if (e.target.innerHTML.match(/[+*/-]/) && lastChar.match(/[+*/-]/)) 
        {
            // Check if the last character is already an operator
            return;
        }
        else
        {
            string +=e.target.innerHTML;
            input.value=string;
        }
    })
})