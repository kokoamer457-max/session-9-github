var question_1 = "no"
var question_2 = "yes"
var question = prompt("Are you going to the college this term?")

if (question == question_1) {
    console.log("فاشل و هتسقط ")
} else if (question == question_2) {
    var question = prompt("Are you going to attend all your lectures?")
    if (question == question_1) {
        console.log("هتسقط بردو يبني")
    }
    else if (question == question_2) {
        var question = prompt("Are you going to study your lessons well?")
        if (question == question_1) {
            console.log("شكلك مش ناوي تنجح")
        }else if(question == question_2){
            console.log("خلاص هتنجح يا عم بعون الله ")
        }
    }

} else {
    console.log("answer with yes or no")
}









