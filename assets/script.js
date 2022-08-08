
const button = document.getElementById('button_encrypt')
const img = document.getElementById('img_munieco')
const p = document.getElementById('p_show_hidden')
const input = document.getElementById('textarea')
const div = document.getElementById('right-side')

// hidde image
function hiddeElement(element){
    element.style.display = 'none'
}



button.addEventListener('click', function(){
    
    if(input.value != ""){
        hiddeElement(img)
        hiddeElement(p)

        div.innerHTML = `<p class="text_content"> ${input.value}</p>`
        input.value = ""  
    }

})