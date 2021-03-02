module.exports = function toReadable(number) {
    const units = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }
    const dozens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    const hundreds = {
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred',
    }

    if (number <= 9) return units[number]

    if (number >= 10 && number <= 99) {
        if (number <= 19) return dozens[number]
        if (number % 10 === 0) return dozens[number]
        else {
            let lastNum = number % 10
            number = number - lastNum
            return `${dozens[number]} ${units[lastNum]}`
        }
    }

    if (number >= 100 && number <= 999) {
        let lastNum, midNum, firstNum

        if (number % 100 === 0) return hundreds[number]
        else {
            if (number % 10 === 0) {
                lastNum = number % 100
                number = number - lastNum
                return `${hundreds[number]} ${dozens[lastNum]}`
            } else if (number % 100 < 10) {
                lastNum = number % 100
                number = number - lastNum
                return `${hundreds[number]} ${units[lastNum]}`
            } else if (number % 100 < 20) {
                lastNum = number % 100
                number = number - lastNum
                return `${hundreds[number]} ${dozens[lastNum]}`
            } else {
                lastNum = number % 10
                midNum = (number % 100) - lastNum
                firstNum = number - midNum - lastNum
                return `${hundreds[firstNum]} ${dozens[midNum]} ${units[lastNum]}`
            }
        }
    }
}
