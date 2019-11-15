input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})

radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        255,
        robotbit.Motors.M1B,
        255
        )
    }
    if (receivedNumber == 1) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        255,
        robotbit.Motors.M1B,
        0
        )
    }
    if (receivedNumber == 2) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M1B,
        255
        )
    }
})

radio.setGroup(1)
basic.showLeds(`
    . . . . .
    # . . . #
    # . . . #
    . . . . .
    . . . . .
    `)

basic.forever(function () {
	
})
