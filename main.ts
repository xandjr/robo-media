input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showNumber(num1)
    pause(300)
    basic.clearScreen()
    basic.showNumber(num2)
    pause(300)
    basic.clearScreen()
    basic.showNumber(num3)
    pause(300)
    basic.clearScreen()
    basic.showNumber(num4)
    pause(300)
    basic.clearScreen()
    basic.showString("SUA MEDIA:")
    basic.clearScreen()
    basic.showNumber(media)
    pause(500)
    basic.clearScreen()
})
let media = 0
let num4 = 0
let num3 = 0
let num2 = 0
let num1 = 0
num1 = randint(0, 10)
num2 = randint(0, 10)
num3 = randint(0, 10)
num4 = randint(0, 10)
media = (num1 + num2 + num3 + num4) / 4
