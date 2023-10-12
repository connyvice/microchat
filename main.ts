input.onButtonPressed(Button.A, function () {
    radio.sendString("\"Micro Chat!\"")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("Hello!")
})
radio.setGroup(1)
