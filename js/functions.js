
//Jquery Simulator:

const $ = document.querySelector.bind(document);
const log = console.log.bind(console);

const html = {

    tabsMenu: [...$('.bodyImg__header__menuItems').children],
    tabContentWrapper: $('.sectionBodyWrapper'),
    tabsContent: [...$('.sectionBodyWrapper').children],

}

// Start Functions OnLoadPage:

window.addEventListener('load', () => {

    const tabNavigation = TabNavigation();
    tabNavigation.init()

})

// General Functions:

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) >= 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};


// Function Tab Navigation:


function TabNavigation() {

    const init = () => {
        listenForChange();
    }

    const removeAllActiveClass = () => {

        html.tabsMenu.forEach(tab => {
            tab.children[0].className = ""
        })

    }

    const showCurrentTabContent = (id) => {

        const tabContent = $(`#${id}`);

        
        //html.tabContentWrapper.scrollTo(tabContent.getBoundingClientRect().x, 0 )        

    }

    const selectTab = (event) => {

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

    return {
        init
    }

}

