
// тег Accordion
import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

// Accordion получил titleValue и передал его значение в AccordionTitle
function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    }
}

type AccordionTitlePropsType = {
    title: string
}

// AccordionTitle получил значение title
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    /*if (props.title === "Menu") {
        return <h3>Меню</h3>
    } else {
        return <h3>Содержимое Меню</h3>
    }*/
    // Передаем значение title
    return (
        <h3>{props.title}</h3>
    )
}
function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;