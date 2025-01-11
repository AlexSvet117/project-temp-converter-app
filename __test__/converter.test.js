import {describe, it, expect, test} from 'vitest'
import {celsiusToFarenhite, farenhiteToCelsius} from '../src/converter.js'

describe('celsiusToFarenhite tests', () => {
    // 0C should be 32F
    it('should convert 0C into 32F', () => {
        expect(celsiusToFarenhite(0)).toBe(32)
    })
    // 100C should be 212F
    it('should convert 100C into 212F', () => {
        expect(celsiusToFarenhite(100)).toBe(212)
    })
    // "25C" should be 77
    it('should convert "25"C as string into 77F', () => {
        expect(celsiusToFarenhite("25")).toBe(77)
    })
    // -40C should be -40F
    it('should convert -40C into -40F', () => {
        expect(celsiusToFarenhite(-40)).toBe(-40)
    })
})