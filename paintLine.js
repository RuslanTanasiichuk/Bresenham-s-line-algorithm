'use strict'

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const windowInnerWidth = window.innerWidth;
const windowInnerHeight = window.innerHeight;
const boxSize = 20;
const black = '#000000';

canvas.width = Math.floor(windowInnerWidth / boxSize) * boxSize - 25;
canvas.height = Math.floor(windowInnerHeight / boxSize) * boxSize - 25;

import Line from "./Line.js";
let pointOne = {
    x: 0,
    y: 3,
}
let pointTwo = {
    x: 14,
    y: 7,
}
let line = new Line(pointOne, pointTwo);
console.log(line.getPoints());
paintConsole(line.getPoints());
paintCanvas(line.getPoints());



function paintConsole(points){
    points.sort((pointOne, pointTwo) => {
        if(pointOne.y - pointTwo.y){
            return pointTwo.y - pointOne.y;
        }
        else {
            return pointOne.x - pointTwo.x;
        }
    });
    console.log(points);
    let lineString = getSpaceSymbol(points[0].x + 1) + '+';
    for(let i = 1; i < points.length; i++){
        if(points[i].y != points[i-1].y){
            lineString += '\n' + getSpaceSymbol(points[i].x + 1) + '+';
        }
        else {
            lineString += '+';
        }
    }
    console.log(lineString);
}

function getSpaceSymbol(n){
    return new Array(n).join(' ');
}

function paintCanvas(points){
    for(let point of points){
        paintRect(point);
    }
}

function paintRect(point){
    let styleNow, x, y;
    styleNow = ctx.strokeStyle;
    x = point.x * boxSize;
    y = canvas.height - point.y * boxSize - boxSize;
    ctx.strokeStyle = black;
    ctx.fillRect(x, y, boxSize, boxSize);
    ctx.strokeStyle = styleNow;
}
