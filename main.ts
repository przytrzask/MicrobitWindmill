input.onButtonPressed(Button.A, function () {
    pressed = "A"
})
input.onButtonPressed(Button.B, function () {
    pressed = "B"
})
let pressed = ""
pressed = "B"

basic.forever(function () {
   const  value = pins.analogReadPin(AnalogPin.P0)
   
    if(value === 4){
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)

        
    } else {
        SuperBit.MotorStopAll()

    }
})
basic.forever(function () {
    if (pressed == "A") {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        SuperBit.Servo(SuperBit.enServo.S5, 10)
        basic.pause(1000)
        SuperBit.Servo(SuperBit.enServo.S5, 0)
        basic.pause(1000)
    } else if (pressed == "B") {
        SuperBit.Servo(SuperBit.enServo.S5, 0)
        SuperBit.MotorStopAll()
    }
})
