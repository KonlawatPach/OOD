var lastYear = 1;//บอกว่าชั้นปีถัดไปจะเป็นชั้นปีใหน


function deleteYear(){
    $('#'+lastYear--).remove()
    if(lastYear == 1){
        document.getElementById("delYear").disabled = true;
    }
}
function getsPLOs(num){
    
}
function addYLO(yloID){
    yloID = yloID.split('-')
    
    $("#"+ yloID[0] +`-`+ (Number(yloID[1]))).after(`
    <div class="row mt-3 ms-4 ylobody`+ yloID[0] +`" id="`+yloID[0] +`-`+(Number(yloID[1])+1)+`">
        <div class="col-2 p-0 text-center ylo`+ yloID[0] +`">รายละเอียดกิจกรรมที่ `+ yloID[0] +`-`+ (Number(yloID[1])+1) +`<span class="text-danger"> *</span></div>
        <div class="col-8 p-0">
            <textarea class="w-100 yloinput`+ yloID[0] +`" required autocomplete="off" type="text" id="ylo-`+ yloID[0] +`-`+ (Number(yloID[1])+1) +`" onchange="haveSameText()"></textarea>
        </div>
        <div class="col-1 p-0 text-center">
            <button type="button" class="btn btn-success btn-sm rounded-3 addylobtn`+ yloID[0] +`" onclick="addYLO('`+ yloID[0] +`-`+ (Number(yloID[1])+1) +`')">เพิ่มกิจกรรม</button>
        </div>
        <div class="col-1 p-0 text-center">
            <button type="button" class="btn btn-danger btn-sm rounded-3 delylobtn`+ yloID[0] +`" onclick="delYLO('`+ yloID[0] +`-`+ (Number(yloID[1])+1) +`')">ลบกิจกรรม</button>
        </div>
    </div>
    `);
    sortNumber(yloID[0])
}
function addActivity(ActivityID){
    ActivityID = ActivityID.split('-')
    $("#"+ ActivityID[0] +`-`+ (Number(ActivityID[1]))).after(`
    <div class="row mt-3 ms-4 Activitybody`+ ActivityID[0] +`" id="`+ActivityID[0] +`-`+(Number(ActivityID[1])+1)+`">
        <div class="col-2 p-0 text-center Activity`+ ActivityID[0] +`">วิธีการประเมินเกเร `+ ActivityID[0] +`-`+ (Number(ActivityID[1])+1) +`<span class="text-danger"> *</span></div>
        <div class="col-8 p-0">
            <textarea class="w-100 Activityinput`+ ActivityID[0] +`" required autocomplete="off" type="text" id="Activity-`+ ActivityID[0] +`-`+ (Number(ActivityID[1])+1) +`" onchange="haveSameTexttwo()"></textarea>
        </div>
        <div class="col-1 p-0 text-center">
            <button type="button" class="btn btn-success btn-sm rounded-3 addActivitybtn`+ ActivityID[0] +`" onclick="addActivity('`+ ActivityID[0] +`-`+ (Number(ActivityID[1])+1) +`')">เพิ่มกิจกรรม</button>
        </div>
        <div class="col-1 p-0 text-center">
            <button type="button" class="btn btn-danger btn-sm rounded-3 delActivitybtn`+ ActivityID[0] +`" onclick="delActivity('`+ ActivityID[0] +`-`+ (Number(ActivityID[1])+1) +`')">ลบกิจกรรม</button>
        </div>
    </div>
    `);
    sortNumber(ActivityID[0])
}

function delYLO(yloID){
    console.log("ylo");
    yloID = yloID.split('-')
    $('#' + yloID[0] + "-" + yloID[1]).remove()
    sortNumber(yloID[0])
}
function delActivity(ActivityID){
    console.log("ActivityID");
    ActivityID = ActivityID.split('-')
    $('#' + ActivityID[0] + "-" + ActivityID[1]).remove()
    sortNumber(ActivityID[0])
}

function sortNumber(yloID){
    
    let x = document.getElementsByClassName("ylo" + yloID)
    for (let i = 1; i <= x.length; i++) {
        document.getElementsByClassName("ylobody" + yloID)[i-1].setAttribute("id", yloID +"-"+ i );
        document.getElementsByClassName("ylo" + yloID)[i-1].textContent = "รายละเอียดกิจกรรมที่ "+ i;
        document.getElementsByClassName("yloinput" + yloID)[i-1].setAttribute("id", yloID +"-"+ i );
        document.getElementsByClassName("addylobtn" + yloID)[i-1].setAttribute( "onClick", "addYLO('" + yloID[0] + "-" + i + "')" );
        document.getElementsByClassName("delylobtn" + yloID)[i-1].setAttribute( "onClick", "delYLO('" + yloID[0] + "-" + i + "')" );
    }
    $(`<span class="text-danger"> *</span>`).appendTo((".ylo" + yloID));
    if(x.length == 1) document.getElementsByClassName("delylobtn" + yloID)[0].disabled = true;
    else document.getElementsByClassName("delylobtn" + yloID)[0].disabled = false;
}
function sortNumber(ActivityID){
    
    let y = document.getElementsByClassName("Activity" + ActivityID)
    for (let p = 1; p <= y.length; p++) {
        document.getElementsByClassName("Activitybody" + ActivityID)[p-1].setAttribute("id", ActivityID +"-"+ p );
        document.getElementsByClassName("Activity" + ActivityID)[p-1].textContent = "วิธีการประเมิน "+ p;
        document.getElementsByClassName("Activityinput" + ActivityID)[p-1].setAttribute("id", ActivityID +"-"+ p );
        document.getElementsByClassName("addActivitybtn" + ActivityID)[p-1].setAttribute( "onClick", "addActivity('" + ActivityID[0] + "-" + p + "')" );
        document.getElementsByClassName("delActivitybtn" + ActivityID)[p-1].setAttribute( "onClick", "delActivity('" + ActivityID[0] + "-" + p + "')" );
    }
    $(`<span class="text-danger"> *</span>`).appendTo((".activity" + ActivityID));
    if(y.length == 1) document.getElementsByClassName("delActivitybtn" + ActivityID)[0].disabled = true;
    else document.getElementsByClassName("delActivitybtn" + ActivityID)[0].disabled = false;
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
        let x = document.getElementsByClassName("ylo" + year)
        for (let i = 1; i <= x.length; i++) {
            choosetext = document.getElementsByClassName("yloinput" + year)[i-1].value;

            //compare loop zone
            if(choosetext != ''){
                for (let cyear = 1; cyear <= lastYear; cyear++) {
                    let y = document.getElementsByClassName("ylo" + cyear)
                    for (let j = 1; j <= y.length; j++) {
                        comparetext = document.getElementsByClassName("yloinput" + cyear)[j-1].value;
                        if(choosetext == comparetext && (year != cyear || i != j)){
                            document.getElementsByClassName("yloinput" + year)[i-1].style.borderColor = "red";
                            document.getElementsByClassName("yloinput" + cyear)[j-1].style.borderColor = "red";
                            document.getElementsByClassName("yloinput" + year)[i-1].scrollIntoView();
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
        let y = document.getElementsByClassName("Activity" + year)
        for (let i = 1; i <= y.length; i++) {
            choosetext = document.getElementsByClassName("Activityinput" + year)[i-1].value;

            //compare loop zone
            if(choosetext != ''){
                for (let cyear = 1; cyear <= lastYear; cyear++) {
                    let y = document.getElementsByClassName("Activity" + cyear)
                    for (let j = 1; j <= y.length; j++) {
                        comparetext = document.getElementsByClassName("Activityinput" + cyear)[j-1].value;
                        if(choosetext == comparetext && (year != cyear || i != j)){
                            document.getElementsByClassName("Activityinput" + year)[i-1].style.borderColor = "red";
                            document.getElementsByClassName("Activityinput" + cyear)[j-1].style.borderColor = "red";
                            document.getElementsByClassName("Activityinput" + year)[i-1].scrollIntoView();
                            hasSame = true;
                        }
                    }
                }
            }
        }
    }
}
