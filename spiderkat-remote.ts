input.onButtonPressed(Button.A, function () {
    radio.sendString("M -255 255")
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("M 255 -255")
})

input.onButtonPressed(Button.AB, function () {
    radio.sendString("M 255 255")
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
    let x = pins.analogReadPin(AnalogPin.P1);
    x = (x / 2) - 256;

    if (x > 128) {
        radio.sendString("M -255 -255")
    } else if (x < -128) {
        radio.sendString("M 255 255")
    } else {

        let y = pins.analogReadPin(AnalogPin.P2);
        y = (y / 2) - 256;

        if (y > 128) {
            radio.sendString("M 255 -255")
        } else if (y < -128) {
            radio.sendString("M -255 255")
        } else {
            radio.sendString("M 0 0")
        }
    }
})