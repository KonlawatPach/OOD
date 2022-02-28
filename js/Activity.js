var lastYear = 1;//บอกว่าชั้นปีถัดไปจะเป็นชั้นปีใหน


function deleteYear(){
    $('#'+lastYear--).remove()
    if(lastYear == 1){
        document.getElementById("delYear").disabled = true;
    }
}
function getsPLOs(num){
    
}
function addYLO(activityID){
    activityID = activityID.split('-')
    $("#"+ activityID[0] +`-`+ (Number(activityID[1]))).after(`
    <div class="row mt-3 ms-4 activitybody`+ activityID[0] +`" id="`+activityID[0] +`-`+(Number(activityID[1])+1)+`">
        <div class="col-2 p-0 text-center activity`+ activityID[0] +`">รายละเอียดกิจกรรมที่ `+ activityID[0] +`-`+ (Number(activityID[1])+1) +`<span class="text-danger"> *</span></div>
        <div class="col-8 p-0">
            <textarea class="w-100 activityinput`+ activityID[0] +`" required autocomplete="off" type="text" id="activity-`+ activityID[0] +`-`+ (Number(activityID[1])+1) +`" onchange="haveSameText()"></textarea>
        </div>
        <div class="col-1 p-0 text-center">
            <button type="button" class="btn btn-success btn-sm rounded-3 addactivitybtn`+ activityID[0] +`" onclick="addYLO('`+ activityID[0] +`-`+ (Number(activityID[1])+1) +`')">เพิ่มกิจกรรม</button>
        </div>
        <div class="col-1 p-0 text-center">
            <button type="button" class="btn btn-danger btn-sm rounded-3 delactivitybtn`+ activityID[0] +`" onclick="delYLO('`+ activityID[0] +`-`+ (Number(activityID[1])+1) +`')">ลบกิจกรรม</button>
        </div>
    </div>
    `);
    sortNumber(activityID[0])
}
function addAssessment(AssessmentID){
    AssessmentID = AssessmentID.split('-')
    $("#"+ AssessmentID[0] +`-`+ (Number(AssessmentID[1]))).after(`
    <div class="row mt-3 ms-4 Assessmentbody`+ AssessmentID[0] +`" id="`+AssessmentID[0] +`-`+(Number(AssessmentID[1])+1)+`">
        <div class="col-2 p-0 text-center Assessment`+ AssessmentID[0] +`">วิธีการประเมินเกเร `+ AssessmentID[0] +`-`+ (Number(AssessmentID[1])+1) +`<span class="text-danger"> *</span></div>
        <div class="col-8 p-0">
            <textarea class="w-100 Assessmentinput`+ AssessmentID[0] +`" required autocomplete="off" type="text" id="Assessment-`+ AssessmentID[0] +`-`+ (Number(AssessmentID[1])+1) +`" onchange="haveSameTexttwo()"></textarea>
        </div>
        <div class="col-1 p-0 text-center">
            <button type="button" class="btn btn-success btn-sm rounded-3 addAssessmentbtn`+ AssessmentID[0] +`" onclick="addAssessment('`+ AssessmentID[0] +`-`+ (Number(AssessmentID[1])+1) +`')">เพิ่มกิจกรรม</button>
        </div>
        <div class="col-1 p-0 text-center">
            <button type="button" class="btn btn-danger btn-sm rounded-3 delAssessmentbtn`+ AssessmentID[0] +`" onclick="delAssessment('`+ AssessmentID[0] +`-`+ (Number(AssessmentID[1])+1) +`')">ลบกิจกรรม</button>
        </div>
    </div>
    `);
    sortassesment(AssessmentID[0])
}

function delYLO(activityID){
    
    activityID = activityID.split('-')
    $('#' + activityID[0] + "-" + activityID[1]).remove()
    sortNumber(activityID[0])
}
function delAssessment(AssessmentID){
    AssessmentID = AssessmentID.split('-')
    $('#' + AssessmentID[0] + "-" + AssessmentID[1]).remove()
    sortassesment(AssessmentID[0])
}

function sortNumber(activityID){
    let x = document.getElementsByClassName("activity" + activityID)
    for (let i = 1; i <= x.length; i++) {
        document.getElementsByClassName("activitybody" + activityID)[i-1].setAttribute("id", activityID +"-"+ i );
        document.getElementsByClassName("activity" + activityID)[i-1].textContent = "รายละเอียดกิจกรรมที่"+ i;
        document.getElementsByClassName("activityinput" + activityID)[i-1].setAttribute("id", activityID +"-"+ i );
        document.getElementsByClassName("addactivitybtn" + activityID)[i-1].setAttribute( "onClick", "addYLO('" + activityID[0] + "-" + i + "')" );
        document.getElementsByClassName("delactivitybtn" + activityID)[i-1].setAttribute( "onClick", "delYLO('" + activityID[0] + "-" + i + "')" );
    }
    $(`<span class="text-danger"> *</span>`).appendTo((".activity" + activityID));
    if(x.length == 1) document.getElementsByClassName("delactivitybtn" + activityID)[0].disabled = true;
    else document.getElementsByClassName("delactivitybtn" + activityID)[0].disabled = false;
}

function sortassesment(AssessmentID){
    
    let y = document.getElementsByClassName("Assessment" + AssessmentID)
    for (let p = 1; p <= y.length; p++) {
        document.getElementsByClassName("Assessmentbody" + AssessmentID)[p-1].setAttribute("id", AssessmentID +"-"+ p );
        console.log("id", AssessmentID +"-"+ p );
        document.getElementsByClassName("Assessment" + AssessmentID)[p-1].textContent = "วิธีการประเมิน "+ p;
        document.getElementsByClassName("Assessmentinput" + AssessmentID)[p-1].setAttribute("id", AssessmentID +"-"+ p );
        document.getElementsByClassName("addAssessmentbtn" + AssessmentID)[p-1].setAttribute( "onClick", "addAssessment('" + AssessmentID[0] + "-" + p + "')" );
        document.getElementsByClassName("delAssessmentbtn" + AssessmentID)[p-1].setAttribute( "onClick", "delAssessment('" + AssessmentID[0] + "-" + p + "')" );
    }
    $(`<span class="text-danger"> *</span>`).appendTo((".Assessment" + AssessmentID));
    if(y.length == 1) document.getElementsByClassName("delAssessmentbtn" + AssessmentID)[0].disabled = true;
    else document.getElementsByClassName("delAssessmentbtn" + AssessmentID)[0].disabled = false;
}

// ส่วนของการ validation
$("#YLOform").submit(function(e) {
    e.preventDefault();
});

function addYLOData(){
    if(!haveSameText()){
        console.log("easy!!")
    }
}

function haveSameText(){
    //clear black border
    let inputtext = document.getElementsByTagName("textarea")
    for (let i = 1; i <= inputtext.length; i++) {
        inputtext[i-1].style.borderColor = "black";
    }

    //choose zone
    let hasSame = false;
    let choosetext;
    let comparetext;
    let lastYear=5;
    for (let year = 1; year <= lastYear; year++) {
        let x = document.getElementsByClassName("activity" + year)
        for (let i = 1; i <= x.length; i++) {
            choosetext = document.getElementsByClassName("activityinput" + year)[i-1].value;

            //compare loop zone
            if(choosetext != ''){
                for (let cyear = 1; cyear <= lastYear; cyear++) {
                    let y = document.getElementsByClassName("activity" + cyear)
                    for (let j = 1; j <= y.length; j++) {
                        comparetext = document.getElementsByClassName("activityinput" + cyear)[j-1].value;
                        if(choosetext == comparetext && (year != cyear || i != j)){
                            document.getElementsByClassName("activityinput" + year)[i-1].style.borderColor = "red";
                            document.getElementsByClassName("activityinput" + cyear)[j-1].style.borderColor = "red";
                            document.getElementsByClassName("activityinput" + year)[i-1].scrollIntoView();
                            hasSame = true;
                        }
                    }
                }
            }
        }
    }
    
    return hasSame;
}
function haveSameTexttwo(){
    let hasSame = false;
    let choosetext;
    let comparetext;
    let lastYear=5;
    for (let year = 1; year <= lastYear; year++) {
        let y = document.getElementsByClassName("Assessment" + year)
        for (let i = 1; i <= y.length; i++) {
            choosetext = document.getElementsByClassName("Assessmentinput" + year)[i-1].value;

            //compare loop zone
            if(choosetext != ''){
                for (let cyear = 1; cyear <= lastYear; cyear++) {
                    let y = document.getElementsByClassName("Assessment" + cyear)
                    for (let j = 1; j <= y.length; j++) {
                        comparetext = document.getElementsByClassName("Assessmentinput" + cyear)[j-1].value;
                        if(choosetext == comparetext && (year != cyear || i != j)){
                            document.getElementsByClassName("Assessmentinput" + year)[i-1].style.borderColor = "red";
                            document.getElementsByClassName("Assessmentinput" + cyear)[j-1].style.borderColor = "red";
                            document.getElementsByClassName("Assessmentinput" + year)[i-1].scrollIntoView();
                            hasSame = true;
                        }
                    }
                }
            }
        }
    }
}
