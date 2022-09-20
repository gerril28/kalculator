input.onButtonPressed(Button.A, function () {
    num1 += 1
    basic.showNumber(num1)
})
input.onGesture(Gesture.TiltLeft, function () {
    num1 += 1
    basic.showNumber(num2)
})
input.onButtonPressed(Button.B, function () {
    num1 += -1
    basic.showNumber(num1)
})
input.onGesture(Gesture.TiltRight, function () {
    num1 += -1
    basic.showNumber(num2)
})
let num1 = 0
let num2 = 0
basic.showIcon(IconNames.SmallHeart)
num2 = num1
