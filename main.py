def on_button_pressed_a():
    basic.show_number(num1)
    pause(300)
    basic.clear_screen()
    basic.show_number(num2)
    pause(300)
    basic.clear_screen()
    basic.show_number(num3)
    pause(300)
    basic.clear_screen()
    basic.show_number(num4)
    pause(300)
    basic.clear_screen()
    basic.show_string("SUA MEDIA:")
    basic.clear_screen()
    basic.show_number(media)
    pause(500)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

media = 0
num4 = 0
num3 = 0
num2 = 0
num1 = 0
num1 = randint(0, 10)
num2 = randint(0, 10)
num3 = randint(0, 10)
num4 = randint(0, 10)
media = (num1 + num2 + num3 + num4) / 4