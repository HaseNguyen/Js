function saySomething(phrase){
    console.log("You said:" + phrase)

}

function getPhraseLength(phrase){
    var l = phrase.length;
    return l;
}

var thisLength = getPhraseLength("this is a slightly longer sentence ");

console.log(thisLength);