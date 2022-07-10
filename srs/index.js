module.exports = function reverse(n) {
    let reversedNumber = 0;
    n = Math.abs(n);

    while (n) {
        reversedNumber = reversedNumber * 10 + n % 10;
        n = Math.floor(n / 10);
    }

    return reversedNumber;
}
