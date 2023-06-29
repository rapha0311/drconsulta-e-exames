document.addEventListener('mouseover', (e) => {
   const isDropdownBtn = e.target.classList.contains('dropdown')
   
   if(!isDropdownBtn && e.target.closest('.navbar_item')!= null) return;

   let currentSubmenu

   if(isDropdownBtn) {
    const item = e.target.closest('.navbar_item')

    currentSubmenu = item.querySelector('.submenu')

    currentSubmenu.classList.toggle('show')
   }

   document.querySelectorAll('.submenu.show').forEach(submenu => {
    if(submenu == currentSubmenu) return

    submenu.classList.remove('show')
   })
});