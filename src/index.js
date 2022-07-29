import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currentDate=new Date();
currentDate=currentDate.getHours();

let gretting='';
const cssStyle={};

if(currentDate >= 1 && currentDate < 12){
    gretting='Good Morning !!';
    cssStyle.color = "green";
}else if(currentDate >= 12 && currentDate < 19){
    gretting='Good Afternoon !!';
    cssStyle.color = "orange";
}else{
    gretting='Good Night !! ';
    cssStyle.color = "black";
}

ReactDOM.render(
    <>
        <div>
        <h1>Hello World , <span style={cssStyle}>{ gretting }</span></h1>
        </div>
    </>,
    document.getElementById("root")
);