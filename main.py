radio.set_group(69)
def on_received_number(receivedNumber):
    if receivedNumber == 0:
        basic.show_leds("""
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            """)
        basic.pause(300)
        basic.clear_screen()
        basic.pause(100)
    elif receivedNumber == 1:
        basic.show_leds("""
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            """)
        basic.pause(100)
        basic.clear_screen()
        basic.pause(300)
    elif receivedNumber == 2:
            basic.show_leds("""
                . . . . #
                . . . # .
                . . # . .
                . # . . .
                # . . . .
                """)
            basic.pause(100)
            basic.clear_screen()
            basic.pause(300)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_number(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_number(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_ab():
    radio.send_number(2)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

radio.set_group(69)