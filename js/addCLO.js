class Form {
    constructor(num) {
        this.number = num;
        this.description = "";
    }
    addDescription (des) {
        this.description = des;
    }
    getDescription() {
        return this.description;
    }
};

var AllForm = {
    length: 2,
    CLOForm: [new Form(1), new Form(2)],
    addCLO: function (i) {
        this.length++;
        var form  = new Form(i);
        this.CLOForm.push(form);
    },
    delCLO: function (i) {
        this.length--;
        this.CLOForm.splice(i-1, 1);
        this.resetNumber();
    },
    resetNumber: function () {
        for (var i = 0; i < this.length; i++) {
            this.CLOForm[i].number = i+1;
        }
    }
};

function addCLO() {
    AllForm.addCLO(AllForm.length + 1);
    $(`
        <div class ="CLOForm" id = "`+AllForm.length+`">
            <div class = "CLOInutForm">
                <span class = "forSortCLO">(<span>`+AllForm.length+`</span>)ผลลัพธ์การเรียนรู้กระบวนวิชา (Course Learning Outcomes: CLOs)<span class = "RedStar">*</span></span>
                <textarea class = "CLODesBox" required autocomplete="off" onchange="haveSameText()"></textarea>
            </div>
            <div class = "DeleteCLOForm"><button class = "DeleteCLOFormButton" id ="delCLOButton" onclick = "deleteCLO(this.parentNode.parentNode.id)">X</button></div>
        </div>
    `).appendTo(".Content");
    console.log("Add id = "+AllForm.length);
    console.log(AllForm.CLOForm);
    document.getElementById("delCLOButton").disabled = false;
}

function deleteCLO(i) {
    AllForm.delCLO(AllForm.length - 1)
    $("#"+i).remove();
    sortNumCLO();
    console.log("Delete id = " + i);
    console.log(AllForm.CLOForm);
    console.log(i);
    if(AllForm.length == 1){
        document.getElementById("delCLOButton").disabled = true;
    }
}

function sortNumCLO(){
    for (let i = 1; i <= AllForm.length; i++) {
        let x = document.getElementsByClassName("forSortCLO")[i-1].textContent = "("+ i +") ผลลัพธ์การเรียนรู้กระบวนวิชา (Course Learning Outcomes: CLOs)";
    }
    $(".forSortCLO").append($(`<span class = "RedStar">*</span>`));
}

function submit() {
    checkEmptySpace();
}

function checkEmptySpace() {
    // reset all border to black
    let x = document.getElementsByTagName("textarea");
    let i;
    for (i = 0; i < x.length; i++) {
        x.style.boderColor = "black";
    }

    // check duplicate description and make border red
    
    return hasSame;
}