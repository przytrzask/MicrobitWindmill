input.onButtonPressed(Button.A, function () {
    basic.pause(200)
    SuperBit.Servo2(SuperBit.enServo.S4, 30)
})
input.onButtonPressed(Button.B, function () {
    basic.pause(200)
    SuperBit.Servo2(SuperBit.enServo.S4, 0)
})
SuperBit.Servo2(SuperBit.enServo.S4, 0)
enum enRocker {
        Nostate = 0,
        Left,
        Right,
       
    }
function move(value: enRocker){
      
           if(value === enRocker.Right){
          
           SuperBit.Servo(SuperBit.enServo.S8, 65)
       }

          if(value === enRocker.Left){
           SuperBit.Servo(SuperBit.enServo.S8, 115)
           
       }


        if(value === enRocker.Nostate){
           SuperBit.MotorStopAll()
           SuperBit.Servo(SuperBit.enServo.S8, 90)

       }
    }
function Rocker(pin1: AnalogPin, pin2: AnalogPin, pin3: DigitalPin, value: enRocker): void {

        pins.setPull(pin3, PinPullMode.PullUp);
        let x = pins.analogReadPin(pin1);
        let y = pins.analogReadPin(pin2);
        
        let now_state = enRocker.Nostate;

       
       
            if (y < 100) //右
            {
                now_state = enRocker.Left;
            }
            else if (y > 900) //左
            {
                now_state = enRocker.Right;
            }
        
      
       
        move(now_state)

    }
enum enButton {
        Press = 0,
        Realse = 1
    }
function ButtonHandle(value: enButton): void {

        pins.setPull(DigitalPin.P4, PinPullMode.PullUp);
        pins.setPull(DigitalPin.P3, PinPullMode.PullUp);
        if (pins.digitalReadPin(DigitalPin.P4) !== value || pins.digitalReadPin(DigitalPin.P3)) {
            SuperBit.MotorStopAll()}

            if(pins.digitalReadPin(DigitalPin.P4) === value) {
SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
           SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
            }
            
            
             if(pins.digitalReadPin(DigitalPin.P3) === value) {
SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
           SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
            }
            
        
        

    }
basic.forever(function () {
    Rocker(AnalogPin.P2, AnalogPin.P1, DigitalPin.P0, enRocker.Left)
ButtonHandle( enButton.Press)


})
