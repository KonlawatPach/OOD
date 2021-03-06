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

// -----Info for pass data to database----

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

var CLO = db.collection("CLO");
var year = 2564;
var semester = 2;
var cloID = 99;
var CID = "109";
var PID = "204";

// ----end of Info part----

// function for fill data and validate data

function addCLO() {
    AllForm.addCLO(AllForm.length + 1);
    $(`
        <div class ="CLOForm" id = "`+AllForm.length+`">
            <div class = "CLOInutForm">
                <span class = "forSortCLO">(<span>`+AllForm.length+`</span>)ผลลัพธ์การเรียนรู้กระบวนวิชา (Course Learning Outcomes: CLOs)<span class = "RedStar">*</span></span>
                <textarea class = "CLODesBox" required autocomplete="off" onchange="checkDubplicated()"></textarea>
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

async function submit() {
    let isDup = checkDubplicated();
    let isEmpty = checkEmptySpace();
    let canAdd = await isInDatabase();
    if (isEmpty || isDup || canAdd) {
        if (checkDubplicated()) {
            alert("มีการกรอกข้อมูลซ้ำ กรุณาทำการแก้ไข");
            console.log("There are some \'Dupilcated description\'");
        }else if (checkEmptySpace()) {
            alert("ยังมีข้อความที่เป็นช่องว่างอยู่ กรุณาทำการแก้ไข");
            console.log("There are some \'empty space left\'");
        }else if (await isInDatabase()) {
            alert("มีบางข้อความที่มีอยู่ในฐานข้อมูลแล้ว กรุณาแก้ไข")
        }
    }else {
        // Fill info from textarea to array of object in AllForm
        let i; let len = AllForm.length;
        let x = document.getElementsByTagName("textarea");
        for (i = 0; i < len; i++) {
            AllForm.CLOForm[i].description = String(x[i].value);
            console.log("Form("+ AllForm.CLOForm[i].number + ") des = "+AllForm.CLOForm[i].description);

        }
        uploadToCLO();
        
    }
    
}

function uploadToCLO() {
    let i;
    for (i = 0; i < AllForm.length; i++) {
        db.collection("CLO").add({
            CLO_ID: cloID,
            CLODescription: AllForm.CLOForm[i].description,
            Semester: semester,
            PID: PID,
            CID: CID,
            Academic_Year: year
        })
    }
    
}

function checkEmptySpace() {
    let x = document.getElementsByTagName("textarea");
    let found = false;
    for (let i = 0; i < x.length; i++) {
        //console.log(x[i].value);
        if (x[i].value === ""){
            x[i].style.borderColor = "red";
            found = true;
        }
    }
    return found;
}

function checkDubplicated() {
    // reset all border to black
    let x = document.getElementsByTagName("textarea");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].style.borderColor = "black";
    }
    // check duplicate description and make border red
    let j;
    let duplicated = false;
    for(i = 0; i < x.length; i++) {
        //console.log("In loop");
        for (j = i+1; j < x.length; j++) {
            //console.log(temp.value);
            if ((x[i].value != "" || x[j].value != "") && x[i].value == x[j].value) {
                console.log("there are dubplicate!");
                duplicated = true;
                x[i].style.borderColor = "red";
                x[j].style.borderColor = "red";
            }
        }
    }
    return duplicated;
}

async function isInDatabase(){
    let have = false;
    await db.collection("CLO").where( "PID", "==", "204").where( "CID", "==", "111").where( "CLO_ID", "==", 0).get().then((CLOdata) => {
        CLOdata.forEach((doc) => {
            if (doc.exists){
                have =  true;
            }
            else{
                have = false;
            }
        });
    });
    return have;
}