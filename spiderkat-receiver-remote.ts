radio.setGroup(1)
basic.showLeds(`
    . . . . .
    # . . . #
    # . . . #
    . . . . .
    . . . . .
    `)

basic.forever(function () {
    // QnD
    radio.sendString("M 0 0")
})

input.onButtonPressed(Button.A, function () {
    radio.sendString("M -255 255")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("M 255 -255")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("M 255 255")
})

radio.onReceivedString(function (receivedString) {
    let elements = receivedString.split(" ")
    if (elements[0] == "M") {
        let m1aValue = parseInt(elements[1])
        let m1bValue = parseInt(elements[2])

        robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            m1aValue,
            robotbit.Motors.M1B,
            m1bValue
        )
    }
})
