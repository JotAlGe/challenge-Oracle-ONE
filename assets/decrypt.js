const decryptButton = document.getElementById('button_decrypt')
const inputText = document.getElementById('textarea')
const textEncrypt = document.querySelector('.text_content')
const image = document.getElementById('img_munieco')
const subtitle = document.getElementById('p_show_hidden')
const buttonCopy = document.getElementById('copy')
const tit = document.querySelector('.encryp_decryp')

//show elemen
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

decryptButton.addEventListener('click', function (){
    setElementDisplay(image, 'none')
    setElementDisplay(subtitle, 'none')
    setElementDisplay(buttonCopy, 'none')

    tit.textContent = '¡Desencriptado!'
    
    textEncrypt.innerHTML = decrypt(inputText.value)
    inputText.value = ""
})
    
    