
const button = document.getElementById('button_encrypt')
const img = document.getElementById('img_munieco')
const p = document.getElementById('p_show_hidden')
const input = document.getElementById('textarea')
const div = document.getElementById('right-side')
const pEncrypt = document.querySelector('.text_content')
const copyButton  = document.querySelector('#copy')
const title = document.querySelector('.encryp_decryp')

//show elemen
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
