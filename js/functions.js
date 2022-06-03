
//Jquery Simulator:

const $ = document.querySelector.bind(document);

const html = {

    tabsMenu: [...$('.bodyImg__header__menuItems').children],
    tabsContent:[... $('.sectionBodyWrapper').children]

}

// Start Functions OnLoadPage:

window.addEventListener('load', () => {

    const tabNavigation = TabNavigation();
    tabNavigation.init()

}) 

// Functions:


function TabNavigation() {

    const init = () => {
        hideAllContents();
        listenForChange();
    }

    const hideAllContents = () => {

        html.tabsContent.forEach(section => {
            section.className = "sectionBodyWrapper__sectionBody invisibleSection";
        })

    }

    const removeAllActiveClass = () => {

        html.tabsMenu.forEach(tab => {
            tab.children[0].className = ""
        })

    }

    const showCurrentTabContent = (id) => {

        const tabContent = $(`#${id}`);
        tabContent.className = "sectionBodyWrapper__sectionBody visibleSection";

        console.log(tabContent)

    }

    const selectTab = (event) => {

        hideAllContents();
        removeAllActiveClass();

        const target = event.currentTarget;
        showCurrentTabContent(target.dataset.id)

        target.children[0].className += " active";

    }

    const listenForChange = () => {

        html.tabsMenu.forEach(tab => {
            tab.addEventListener('click', selectTab)
        })

    }

    return{
        init
    }

}

