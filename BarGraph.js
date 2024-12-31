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
        else if ((o === "M") || (o === "M ")) {
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


function BarParam(d) {
    var w = SortWhy(d);
    var trace1 = {"x": ['Brooklyn', 'Manhattan', 'Queens', "Bronx", "Staten Island"], "y": w[0], "name": 'Crime',
    "marker": {"color": ['rgb(255,0,0)', 'rgb(255,0,0)', 'rgb(255,0,0)', 'rgb(255,0,0)', 'rgb(255,0,0)']}, 'type': 'bar'}
    var trace2 = {"x": ['Brooklyn', 'Manhattan', 'Queens', "Bronx", "Staten Island"], "y": w[1], "name": 'Arrests', "marker": {"color": ['rgb(52, 152, 219)', 'rgb(52, 152, 219)', 'rgb(52, 152, 219)', 'rgb(52, 152, 219)', 'rgb(52, 152, 219)']}, 'type': 'bar'};
    var data = [trace1, trace2];
    return data;
}


function getdata1(jason) {
    var layout = {"barmode": 'group'};
    var jayson = JSON.parse(jason);
    var DATA = BarParam(jayson);
    var cat = {"data": DATA, "layout": layout};
    return cat;
}


function LoadBarGraph(x) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            var Bargraph = getdata1(this.response);
            Plotly.plot('Bar', Bargraph.data, Bargraph.layout);
        }
    };
    xhttp.open("GET", "/Data");
    xhttp.send();
}
