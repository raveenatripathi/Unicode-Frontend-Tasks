console.log ("Fetching data");
fetch('https://api.covid19api.com/summary')
.then(function(response) {
    return response.json();
})
.then(function(data){
    console.log(data);
    document.getElementById("gNewCases").innerHTML= data.Global.NewConfirmed;
    document.getElementById("gNewDeaths").innerHTML= data.Global.NewDeaths;
    document.getElementById("gNewRec").innerHTML= data.Global.NewRecovered;
    document.getElementById("gCases").innerHTML= data.Global.TotalConfirmed;
    document.getElementById("gDeaths").innerHTML= data.Global.TotalDeaths;
    document.getElementById("gRec").innerHTML= data.Global.NewConfirmed;


    var header= ["Countries","New Cases","New Deaths","New Recovered","Total Cases","Total Deaths","Total Recovered"];
    var mytable=document.createElement("table");
    mytable.style.width= "900px"
    mytable.style.overflowX= "auto"
    var newrow= mytable.insertRow(-1)
    newrow.style.height= "50px"
    for (var i=0; i<7; i++)
    {
        var newcol= document.createElement("th");
        newcol.innerHTML= header[i];
        newrow.appendChild(newcol); 
    }
    for(var j=0; j< data.Countries.length; j++)
    {
        var row= mytable.insertRow(-1);
        row.style.height= "30px"
        for(var k=0; k<7; k++) 
        {
            var info= [data.Countries[j].Country, data.Countries[j].NewConfirmed, data.Countries[j].NewDeaths, data.Countries[j].NewRecovered, 
                      data.Countries[j].TotalConfirmed, data.Countries[j].TotalDeaths, data.Countries[j].TotalRecovered]
            var col= document.createElement("td");
            col.innerHTML= info[k];
            row.appendChild(col);
        }
    }
    var display= document.getElementById("mytable");
    display.appendChild(mytable);
})

 

