input.onButtonPressed(Button.A, function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 180)
})
input.onButtonPressed(Button.AB, function () {
    if (silnik) {
        silnik = 0
    } else {
        silnik = 1
    }
})
input.onButtonPressed(Button.B, function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 90)
})
/**
 * input.onButtonPressed(Button.A, function () {
 */
/**
 * SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
 */
/**
 * })
 */
/**
 * input.onButtonPressed(Button.B, function () {
 */
/**
 * SuperBit.MotorStopAll()
 */
let x = 0
let silnik = 0
const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;
const invlerp = (x: number, y: number, a: number) => clamp((a - x) / (y - x));
const clamp = (a: number, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const range = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    a: number
) => lerp(x2, y2, invlerp(x1, y1, a));
// })
basic.forever(function () {
    // if (silnik) {
    // SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
    // } else {
    // SuperBit.MotorRun(SuperBit.enMotors.M2, 0)
    // }
    // 0 to 1023
    x = pins.analogReadPin(AnalogPin.P1)
    const xAxis = range(0,1023,90,180 ,x)
    basic.showNumber(xAxis)
})
