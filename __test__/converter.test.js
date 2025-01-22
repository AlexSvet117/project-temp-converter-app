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


describe('farenhiteToCelsius tests', () => {
    // 0F should be -17.77777777777778C
    it('should convert 0F into -17.77777777777778C', () => {
        expect(farenhiteToCelsius(0).toBe(-17.77777777777778))
    })
    // 100F should be 37.77777777777778C
    it('should convert 100F into 37.77777777777778C', () => {
        expect(farenhiteToCelsius(100).toBe(37.77777777777778))
    })
    // 212F should be 100C
    it('should convert 212F into 100C', () => {
        expect(farenhiteToCelsius(212).toBe(100))
    })
    // -100F should be -73.33333333333333C
    it('should convert -100F into -73.33333333333333C', () => {
        expect(farenhiteToCelsius(-100).toBe(-73.33333333333333))
    })
})