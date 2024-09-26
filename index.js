const input = document.getElementById("inputBox")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    const reverse = reverseString(value)
    if (value === reverse) {
        alert("Is a palindrome!")
    }
    else (
        alert("Is NOT a palindrome!")
    )
}


