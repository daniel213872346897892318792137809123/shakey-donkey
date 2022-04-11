let me = 0
let you = 0
let caught = 0
radio.onReceivedNumber(function (receivedNumber) {
    me = input.runningTime()
    you = receivedNumber
    basic.showLeds(`
        . . . . #
        . # # # .
        # # # # .
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.A, function () {
    if (me > you) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    me = 0
    you = 0
    caught = 0
})
input.onGesture(Gesture.Shake, function () {
    if (caught != 0) {
        me += input.runningTime() - caught
        basic.clearScreen()
        basic.pause(randint(0, 2000))
        radio.sendNumber(me)
    }
})
