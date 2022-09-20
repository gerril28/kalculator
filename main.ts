input.onButtonPressed(Button.A, function () {
    num1 += 1
    basic.showNumber(num1)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    num1 += -1
    basic.showNumber(num1)
})
let num1 = 0
basic.showIcon(IconNames.SmallHeart)
num1 += randint(1, 25)
