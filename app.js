import { generatePassword } from "./passwordGenerator.js";
import { getPassword,savePassword } from "./storage.js";
const generateBtn = document.getElementById("generate").addEventListener("click", (event)=>{

    const length = document.getElementById("length").value;
    
    const password = generatePassword(length);
    //console.log(password);
    
    const form = document.getElementById("password");
    form.value = password;
    
    
})

const copyBtn = document.getElementById("copy").addEventListener("click", (event)=>{
    
    const password = document.getElementById("password").value;
    const url = document.getElementById("url").value;
    

    savePassword([password,url]);
    //console.log(password);
    navigator.clipboard.writeText(password);
    location.reload();

})

window.onload = ()=>{

    
    const passwords = getPassword();
    if(passwords === null){
        const content = document.createElement("a");
        content.textContent  = "none";
        content.title = "none";
        document.getElementById("content").appendChild(content);

    }else{

        passwords.forEach(password=>{
            const content = document.createElement("a");
            content.textContent  = password[0];
            content.title = password[1] === "" ? "none" : password[1];
            document.getElementById("content").appendChild(content);

        })

    }
}