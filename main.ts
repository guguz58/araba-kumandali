radio.onReceivedValue(function (name, value) {
    if (name == "10") {
        if (value == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        }
    }
})
radio.setGroup(3)
