namespace MakerAG {

    let Position = 0
    //% block
    /**
     * Setze den Greifer von der aktuellen auf eine neue Position
     */
    export function Greifer(Ziel: number) {

        while (Position < Ziel) {
            Position += 1
            calliBot2.servo(C2Servo.Servo1, Position)
            basic.pause(30)
        }
        while (Position > Ziel) {
            Position += -1
            calliBot2.servo(C2Servo.Servo1, Position)
            basic.pause(30)
        }
    }
}
basic.forever(function () {
	
})
