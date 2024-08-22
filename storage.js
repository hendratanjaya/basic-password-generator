export function getPassword(){

    const password = localStorage.getItem("passwords");
    let passwords = password === null ? null : JSON.parse(password);

    return passwords;

}

export function savePassword(newPassword){

    const password = localStorage.getItem("passwords");
    let passwords = password === null ? [] : JSON.parse(password);

    if(passwords.length === 5){

        passwords.splice(0,1);
        passwords.push(newPassword);

    }else{

        passwords.push(newPassword);

    }

    passwords = JSON.stringify(passwords);

    localStorage.setItem("passwords", passwords);
    
}