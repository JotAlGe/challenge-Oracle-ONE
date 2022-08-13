//variables
const button = document.getElementById('button_encrypt')
const decryptButton = document.getElementById('button_decrypt')
const img = document.getElementById('img_munieco')
const p = document.getElementById('p_show_hidden')
const input = document.getElementById('textarea')
const div = document.getElementById('right-side')
const pEncrypt = document.querySelector('.text_content')
const copyButton  = document.querySelector('#copy')
const title = document.querySelector('.encryp_decryp')

//show hidden elemeny
function setElementDisplay(elemen, disp){
    elemen.style.display = disp
}

// encrypt
function encrypt(str){
    let lower = str.toLowerCase()
    let chars = lower.split('')
    let newString = ''
    for(let i = 0; i < chars.length; i++){
        switch(chars[i]){
            case 'e':
                chars[i] = 'enter'
                break;
            case 'i':
                chars[i] = 'imes'
                break;
            case 'a':
                chars[i] = 'ai'
                break;
            case 'o':
                chars[i] = 'ober'
                break;
            case 'u':
                chars[i] = 'ufat'
                break;
            }
            newString += chars[i]   
    }
    return newString
}

// set display property 
function setElementDisplay(elemen, disp){
    elemen.style.display = disp
}


// decrypt function
function decrypt(str){
    let lower = str.toLowerCase()
    
    if(lower.includes('enter', 0)){
        lower = lower.replaceAll('enter', 'e')
    }

    if(lower.includes('imes', 0)){
        lower = lower.replaceAll('imes', 'i')
    }

    if(lower.includes('ai', 0)){
        lower = lower.replaceAll('ai', 'a')
    }

    if(lower.includes('ober', 0)){
        lower = lower.replaceAll('ober', 'o')
    }
    if(lower.includes('ufat', 0)){
        lower = lower.replaceAll('ufat', 'u')
    }
    
    return lower 
}

// click to encrypt
button.addEventListener('click', function(){
    
    if(input.value != ""){
        setElementDisplay(img, 'none')
        setElementDisplay(p, 'none')
        setElementDisplay(copyButton, 'block')
        setElementDisplay(title, 'block')
        
        title.textContent = '¡Encriptado!'
        
        pEncrypt.innerHTML = encrypt(input.value)
        input.value = ""
    }
})


// click to decrypt
decryptButton.addEventListener('click', function (){
    if(input.value != ""){
        setElementDisplay(img, 'none')
        setElementDisplay(p, 'none')
        setElementDisplay(copyButton, 'none')
        setElementDisplay(title, 'block')
    
        title.textContent = '¡Desencriptado!'
        
        pEncrypt.innerHTML = decrypt(input.value)
        input.value = ""
    }
})
