radio.setGroup(1)
input.setAccelerometerRange(AcceleratorRange.EightG)
basic.forever(function () {
    radio.sendString("" + (input.acceleration(Dimension.Strength)))
})
