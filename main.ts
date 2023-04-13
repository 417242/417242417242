let 方位 = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.pause(5000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    方位 = input.compassHeading()
    if (方位 < 45 || 方位 > 315) {
        basic.showLeds(`
            # # . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
    basic.pause(5000)
})
