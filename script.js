//first things first, we need to link the tabs to the corresponding sections

//with this code, you selected all the stuff with data-tab-target in it
const tags = document.querySelectorAll('[data-tab-target')
const tabContents = document.querySelectorAll('[data-tab-content]')


//for each one of those tabs(hours and booking)
//adding an event listener, everytime you click on the tab, we want to run the code

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})