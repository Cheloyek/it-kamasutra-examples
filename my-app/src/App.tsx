import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating"; // import без default {}, имя должно совпадать

function sum(a: number, b: number) {
    alert(a + b)
}
sum(23, 12)
sum(100, 300)

// function declaration
// создан тег App
function App() {
    console.log("App rendering")
  // полезное что-то

  // обязана вернуть JSX
  return (
    <div>
        <PageTitle title={"This is APP component"}/>
        <PageTitle title={"My friends"}/>
        Article 1
        <Rating value={3}/>
        <Accordion titleValue={"Menu"}, collapsed={true}/>
        <Accordion titleValue={"Users"}, collapsed={false}/>
        Article 2
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
    </div>
  );
}

// задает тип string для PageTitle
type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <div>{props.title}</div>
    )
}


export default App;
