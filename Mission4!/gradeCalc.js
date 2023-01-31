document.getElementById("submitGrades").addEventListener("click", function () {
    var asg = document.getElementById("asg").value * 0.5
    var gp = document.getElementById("gp").value * 0.1
    var qz = document.getElementById("qz").value * 0.1
    var me = document.getElementById("me").value * 0.1
    var fe = document.getElementById("fe").value * 0.1
    var intex = document.getElementById("intex").value * 0.1

    var totalGrade = (parseInt(asg) + parseInt(gp) + parseInt(qz) + parseInt(me) + parseInt(fe) + parseInt(intex))

    var sLetterGrade

    if (totalGrade >= 94){
        sSetterGrade = "A"
    }
    else if (totalGrade >= 90){
        sLetterGrade = "A-"
    }
    else if (totalGrade >= 87){
        sLetterGrade = "B+"
    }
    else if (totalGrade >= 84){
        sLetterGrade = "B"
    }
    else if (totalGrade >= 80){
        sLetterGrade = "B-"
    }
    else if (totalGrade >= 77){
        sLetterGrade = "C+"
    }
    else if (totalGrade >= 74){
        sLetterGrade = "C"
    }
    else if (totalGrade >= 70){
        sLetterGrade = "C-"
    }
    else if (totalGrade >= 67){
        sLetterGrade = "D+"
    }
    else if (totalGrade >= 64){
        sLetterGrade = "D"
    }
    else if (totalGrade >= 60){
        sLetterGrade = "D-"
    }
    else {
        sLetterGrade = "E"
    }


    alert("Your final grade is " + sLetterGrade + ", with a total of " + totalGrade + "%")
})