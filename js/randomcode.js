function generateCode() {
    var code = '';
    var str = 'ABCDEFGHYJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (i=1; i<=7; i++){
        var char =  Math.random()* str.length;//random select a character fron the vari;
        code += str.charAt(char);//accumulate the generated character into a string of 8;
    }
    return code;
}
document.getElementById("codes").innerHTML = generateCode();