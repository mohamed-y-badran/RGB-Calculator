// Naming Sliders
var red = document.querySelector('#red')
var green = document.querySelector('#green')
var blue = document.querySelector('#blue')

// Naming Spans
var spred =document.getElementById('spred')
var spgreen =document.getElementById('spgreen')
var spblue =document.getElementById('spblue')

// Naming Result
var result = document.querySelector('#result')

// Naming Color box
var rgbcolor = document.getElementById('rgbcolor')

// Naming Copy Btn
let copy = document.querySelector('#copy')

// Adding Events
red.addEventListener('input', updatesp)
blue.addEventListener('input', updatesp)
// copy.addEventListener("click", copyf)

// Update Spans & Box on moving Sliders
function updatesp (){

    var redv = red.value;
    var greenv = green.value;
    var bluev = blue.value;

    var rgb = 'rgb('+redv+','+greenv+','+bluev+')'
    // var rgb = `rgb(${redv},${greenv},${bluev})`

    spred.innerHTML= redv
    // console.log(redv)

    spgreen.innerHTML= greenv
    // console.log(greenv)

    spblue.innerHTML= bluev
    // console.log(bluev)

    result.innerHTML = rgb
    rgbcolor.style.backgroundColor = rgb
    
    // console.log(rgb)
}

updatesp()

function copyf (){
    var redv = red.value;
    var greenv = green.value;
    var bluev = blue.value;

    var rgb = `rgb(${redv},${greenv},${bluev})`

    navigator.clipboard.writeText(rgb)
        .then( () => {
            alert("Rgb Color is Copied: Rgb =" + rgb)
            console.log(rgb)
        })
        .catch( function error(){
            console.error("Failed to copy RGB Value",error)          
        })

}



