input.onButtonPressed(Button.A, function () {
    pressed = "A"
})
input.onButtonPressed(Button.B, function () {
    pressed = "B"
})
let value2 = 0
let degree = 0
let value = 0
let pressed = ""
pressed = "A"
SuperBit.Servo(SuperBit.enServo.S2, 151)
basic.showString(pressed)

basic.forever(function () {
    basic.showString(pressed)
    if (pressed == "A") {
        // from 10 to 170
        value = pins.analogReadPin(AnalogPin.P3)
        degree = Math.round(value * 0.16)
        SuperBit.Servo(SuperBit.enServo.S2, degree)
    } else {
        value2 = pins.analogReadPin(AnalogPin.P3)
        
        if(value2 > 1000) {
            SuperBit.MotorRun(SuperBit.enMotors.M1, 100)
        } 

        else if(value2 < 60) {
            SuperBit.MotorRun(SuperBit.enMotors.M1, -100)
        }  else {
             SuperBit.MotorStopAll()
        }
    }
})
