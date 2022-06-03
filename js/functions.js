
// -> Jquery Simulator:

const $ = document.querySelector.bind(document);
const log = console.log.bind(console);

const html = {

    tabsMenu: [...$('.bodyImg__header__menuItems').children],
    tabsContent: [...$('.sectionBodyWrapper').children],
    tabContentWrapper: $('.sectionBodyWrapper'),

}

// -> Window Functions:


window.addEventListener('load', () => {

    // tabFunction:

    discoverAxisEl(html.tabsContent)

    const tabNavigation = TabNavigation();
    tabNavigation.init()

    //

});



// -> General Functions:




// -> Function Tab Navigation:

let positionHorizontalScroll = [];

function discoverAxisEl(element = []) {

    element.forEach(item => {
        let obj = {
            id: item.id,
            xAxis: item.getBoundingClientRect().x
        }
        positionHorizontalScroll.push(obj)
    })

}

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

        //const tabContent = $(`#${id}`);

        const axis = positionHorizontalScroll.find((el) => el.id === id)

        html.tabContentWrapper.scrollTo({
            top: 0,
            left: axis.xAxis,
            behavior: 'smooth',
        })

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

