// Inspired by a Wallpaper that i Use
function sad() {
    console.log('I\'m Sad')
}
function BeAwesome() {
    console.log('Start being awesome')
}
// Life Motto
function LifeMotto() {
    if (sad() === false) {
        return;
    }
    else {
        BeAwesome();
    }
}
LifeMotto()