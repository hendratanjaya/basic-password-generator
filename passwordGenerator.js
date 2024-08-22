export function generatePassword(length){


    let password = "";
    const ascii = [[48,57], [65,90], [97,122]]; // [[number],[uppercase],[lowercase]]
    for(let i = 0 ; i < length; ++i){
        let charType = ascii[Math.floor(Math.random()*3)]

                                                                 //(Max - Min + 1) + Min
        let char = String.fromCharCode(Math.floor(Math.random()* (charType[1] - charType[0] + 1) + charType[0]));
        password += char;

    }
    
    return password;

}