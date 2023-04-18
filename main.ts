input.onButtonPressed(Button.A, function () {
    running = true
    開始 = input.runningTime()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (!(running)) {
        basic.showNumber(Math.idiv(時間, 1000))
        basic.pause(100)
        basic.showNumber(步數)
    }
})
input.onButtonPressed(Button.B, function () {
    if (running) {
        時間 += input.runningTime() - 開始
    }
    running = false
})
let 時間 = 0
let 開始 = 0
let running = false
let 步數 = 0
步數 = 0
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1000) {
        步數 += 1
    }
})
basic.forever(function () {
    if (running) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
