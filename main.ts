let acc = 0
radio.setGroup(1)
radio.setFrequencyBand(70)
input.setAccelerometerRange(AcceleratorRange.EightG)
let accThreshold = 1200
let sendUntil = control.millis() + 2000
basic.forever(function () {
    acc = input.acceleration(Dimension.Strength)
    if (acc >= accThreshold || sendUntil > control.millis()) {
        if (acc >= accThreshold) {
            sendUntil = control.millis() + 2000
        }
        radio.sendString("iss/onAcc " + acc)
        control.waitMicros(20000)
        serial.writeLine("" + (acc))
    }
})
