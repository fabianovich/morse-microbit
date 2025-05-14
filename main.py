radio.set_group(69)
def on_forever():
    def on_received_number(receivedNumber):
        if receivedNumber == 0:
            basic.show_leds("""
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            """)

        if receivedNumber == 1:
            basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
    radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_number(0)
def on_button_pressed_b():
    radio.send_number(1)
input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.forever(on_forever)
