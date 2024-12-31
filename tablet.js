function SortWhy(list) {
    var data1 = list[0];
    var data2 = list[1];
    var BrookC = 0;
    var ManC = 0;
    var QueenC = 0;
    var BronxC = 0;
    var StatC = 0;
    var BrookA = 0;
    var ManA = 0;
    var QueenA = 0;
    var BronxA = 0;
    var StatA = 0;
    var Arrests = [];
    var Crime = [];
    for (var x of data1) {
        if (x === "BROOKLYN") {
            BrookC = BrookC + 1;
        }
        else if (x === "MANHATTAN") {
            ManC = ManC + 1;
        }
        else if (x === "QUEENS") {
            QueenC = QueenC + 1;
        }
        else if (x === "BRONX") {
            BronxC = BronxC + 1;
        }
        else if (x === "STATEN ISLAND") {
            StatC = StatC + 1;
        }
    }
    for (var o of data2) {
        if ((o === "K ") || (o === "K")) {
            BrookA =BrookA + 1;
        }
        else if ((o === "M") ||(o === "M ")) {
            ManA = ManA + 1;
        }
        else if ((o === "Q") || (o === "Q ")) {
            QueenA = QueenA + 1;
        }
        else if ((o === "B") || (o === "B ")) {
            BronxA = BronxA + 1;
        }
        else if ((o === "S") || (o === "S ")) {
            StatA = StatA + 1;
        }
    }
    Arrests.push(BrookA);
    Arrests.push(ManA);
    Arrests.push(QueenA);
    Arrests.push(BronxA);
    Arrests.push(StatA);
    Crime.push(BrookC);
    Crime.push(ManC);
    Crime.push(QueenC);
    Crime.push(BronxC);
    Crime.push(StatC);
    return [Crime, Arrests];
}


function TableParam(a) {
    var sorter = SortWhy(a);
    var list = [];
    list.push(sorter[0][0] - sorter[1][0]);
    list.push(sorter[0][1] - sorter[1][1]);
    list.push(sorter[0][2] - sorter[1][2]);
    list.push(sorter[0][3] - sorter[1][3]);
    list.push(sorter[0][4] - sorter[1][4]);
    sorter.push(list);
    var values = [
    ["Brooklyn", "Manhattan", "Queens", "Bronx", "Staten Island", "(+) means more crime, (-) means more arrest"], sorter[0], sorter[1], sorter[2]];
    var data = [{
        "type": "table",
        "header": {
            "values": [["BOROUGH"], ["CRIME"], ["ARRESTS"], ["DIFFERENCE"]],
           "align": ["left", "center"],
            "line": {"width": 3, "color": "#8B0000"},
            "fill": {"color": "	#000000"},
            "font": {"family": "Arial", "size": 17, "color": "#FFDF00"}
        },
        "cells": {
            "values": values,
            "align": ["left", "center"],
            "line": {"color": "#8B0000", "width": 1},
            "fill": {"color": ["#000000", "black"]},
            "font": {"family": "Arial", "size": 15, "color": ["#FFDF00"]}
        }
    }];
    return data;
}


function getdata(jason) {
    var jayson = JSON.parse(jason);
    var DATA = TableParam(jayson);
    var elf = {"data": DATA};
    return elf;
}

function LoadTable() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            var tableParams = getdata(this.response);
            Plotly.plot('graph', tableParams.data);
        }
    };
    xhttp.open("GET", "/Data");
    xhttp.send();
}