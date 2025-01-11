// Bootstrap’s CSS and JS Import
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// import converter
import{celsiusToFarenhite, farenhiteToCelsius} from './converter'

// DOM Elements
const form = document.getElementById('converterForm')
const tempValue = document.getElementById('tempValue')
const tempType = document.getElementById('tempType')
const result = document.getElementById('result')

const C2F = 'c2f'

// Add listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault()


const currentTempValue = tempValue.value
const converstionType = tempType.value

let output

if (converstionType === C2F) {
  // logic of conversion
  const farenhite = celsiusToFarenhite(currentTempValue)
  output = `${currentTempValue}°C = ${farenhite}°F`
}else {
  //logic of conversion
  const celsius = farenhiteToCelsius(currentTempValue)
  output = `${currentTempValue}°F = ${celsius}°C`
}
result.textContent = output

})

