let coin = {
    state: 0,
    flip: function () {
        this.state = Math.floor(Math.random() * 2)
    },

    toString: function () {

        if (this.state === 0) {
            return 'Heads'
        }
        else {
            return 'Tails'
        }
    },

    toHTML: function () {
        let image = document.createElement('img');
        if (this.state === 0) {
            image.src = "https://clipground.com/images/copper-clipart-13.jpg"
            image.style.width = '300px'
            image.style.height = '300px'
        }
        else {
            image.src = "https://media.istockphoto.com/vectors/tail-view-of-united-states-penny-vector-id186112701?k=6&m=186112701&s=612x612&w=0&h=ArQI71fmqKBk9ENSYetNw1VMSvJqRmtMogBKQy7ExfI="
            image.style.width = '300px'
            image.style.height = '300px'
        }
        return image
    }
};

function display20Flips() {
    for (let index = 0; index < 20; index++) {
        coin.flip()
        let displayFlips = document.createElement('p')
        displayFlips.append(coin.toString())
        document.body.append(displayFlips)
    }
    console.log('Over it')
};

function display20Images() {
    for (let index = 0; index < 20; index++) {
        coin.flip()
        document.body.append(coin.toHTML())
    }
    console.log('Past it')
}

display20Flips()
display20Images()