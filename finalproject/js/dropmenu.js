const toggleBtn =document.querySelector('.toggle-button')
    const toggleBtnIcon =document.querySelector('.toggle-button i')
    const dropDownMenu=document.querySelector('.dropdown-menu')
    
    toggleBtn.onclick=function(){
        dropDownMenu.classList.toggle('open')
        const isOpen=dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList=isOpen
        ? 'fa-sharp fa-solid fa-xmark'
        : 'fa-sharp fa-solid fa-bars'

    }