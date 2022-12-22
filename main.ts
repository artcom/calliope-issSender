radio.setGroup(1)
input.setAccelerometerRange(AcceleratorRange.EightG)
basic.forever(function () {
    radio.sendString("iss/onAcc " + input.acceleration(Dimension.Strength))
    control.waitMicros(20000)
})
