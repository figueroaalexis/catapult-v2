input.onButtonPressed(Button.A, function () {
    if (pins.digitalReadPin(DigitalPin.P2) > 0) {
        music.playTone(784, music.beat(BeatFraction.Eighth))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.showNumber(1)
        music.playTone(784, music.beat(BeatFraction.Eighth))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.showNumber(2)
        music.playTone(988, music.beat(BeatFraction.Half))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.showNumber(3)
        robotbit.MotorStop(robotbit.Motors.M2A)
        basic.pause(200)
        robotbit.MotorRun(robotbit.Motors.M2A, -255)
        basic.pause(500)
        robotbit.MotorStop(robotbit.Motors.M2A)
        music.stopAllSounds()
        armed = 0
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (pins.digitalReadPin(DigitalPin.P2) > 0) {
        robotbit.MotorStop(robotbit.Motors.M2A)
        basic.pause(200)
        robotbit.MotorRun(robotbit.Motors.M2A, -255)
        basic.pause(500)
        robotbit.MotorStop(robotbit.Motors.M2A)
        music.stopAllSounds()
        armed = 0
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let armed = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
armed = 0
robotbit.MotorStopAll()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) > 0 && armed < 1) {
        robotbit.MotorRun(robotbit.Motors.M2A, 225)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        music.playTone(349, music.beat(BeatFraction.Eighth))
        armed = 1
        basic.showLeds(`
            . . # . .
            . . . . .
            # . # . #
            . . . . .
            . . # . .
            `)
    }
    if (pins.digitalReadPin(DigitalPin.P2) < 1) {
        robotbit.MotorStop(robotbit.Motors.M2A)
        music.stopAllSounds()
        armed = 0
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
