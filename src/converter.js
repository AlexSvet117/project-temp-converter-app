// (°C → °F): F = (C * 9/5) + 32
// (°F → °C): C = (F - 32) * 5/9

export function celsiusToFarenhite(celsius) {
    const c = Number(celsius)
    return (c * 9/5) + 32
}

export function farenhiteToCelsius(farenhite) {
    const f = Number(farenhite)
    return (f - 32) * 5/9
}