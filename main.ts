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
        basic.pause(100)
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
        basic.pause(100)
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendNumber(1)
})
radio.setGroup(69)
