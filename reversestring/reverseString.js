function reverseString1(str) {
    let newstr = ''
    for (var i = str.length - 1; i >= 0; i--) {
        newstr += str[i];
    }
    return newstr
}
console.log(reverseString1("hello my name"));


function reverseString2(str) {
    str = str.split('');
    console.log("split", str);
    str = str.reverse();
    console.log("reverse", str);
    str = str.join('');
    console.log("join", str);

    return str
}
console.log(reverseString2("hello my name"));


function reverseString3(str) {
    let newstr = ''
    str.split('');
    for (var i = str.length - 1; i >= 0; i--) {
        newstr += str[i];
    }
    return newstr
}
console.log(reverseString3("hello my name"));

function reverseString4(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString4("hello my name"));