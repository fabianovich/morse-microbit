radio.setGroup(69)
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(300)
        basic.clearScreen()
        basic.pause(100)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(300)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . # . . .
                # . . . .
                `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(300)
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    radio.sendNumber(2)
})
radio.setGroup(69)
