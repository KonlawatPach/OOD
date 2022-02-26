var lastYear = 1;//บอกว่าชั้นปีถัดไปจะเป็นชั้นปีใหน

function addYear(){
    lastYear++
    $(`
        <div class="bg-light mt-1 p-3 rounded-2" id="`+lastYear+`">
            <h5 class="ms-1 fw-bold">ชั้นปีที่ `+lastYear+`</h5>
            <div class="row mt-3 ms-4 ylobody`+lastYear+`" id="`+lastYear+`-1">
                <div class="col-1 p-0 text-center ylo`+lastYear+`">YLO `+lastYear+`-1<span class="text-danger"> *</span></div>
                <div class="col-9 p-0">
                    <textarea class="w-100 yloinput`+lastYear+`" required autocomplete="off" type="text" id="ylo-`+lastYear+`-1" onchange="haveSameText()"></textarea>
                </div>
                <div class="col-1 p-0 text-center">
                    <button type="button" class="btn btn-success btn-sm rounded-3 addylobtn`+lastYear+`" onclick="addYLO('`+lastYear+`-1')">เพิ่ม SubPLOs</button>
                </div>
                <div class="col-1 p-0 text-center">
                    <button type="button" class="btn btn-danger btn-sm rounded-3 delylobtn`+lastYear+`" onclick="delYLO('`+lastYear+`-1')">ลบ SubPLOs</button>
                </div>
            </div>
            <div class="row mt-3 ms-4 ylobody`+lastYear+`" id="`+lastYear+`-2">
                <div class="col-1 p-0 text-center ylo`+lastYear+`">YLO `+lastYear+`-2<span class="text-danger"> *</span></div>
                <div class="col-9 p-0">
                    <textarea class="w-100 yloinput`+lastYear+`" required autocomplete="off" type="text" id="ylo-`+lastYear+`-2" onchange="haveSameText()"></textarea>
                </div>
                <div class="col-1 p-0 text-center">
                    <button type="button" class="btn btn-success btn-sm rounded-3 addylobtn`+lastYear+`" onclick="addYLO('`+lastYear+`-2')">เพิ่ม SubPLOs</button>
                </div>
                <div class="col-1 p-0 text-center">
                    <button type="button" class="btn btn-danger btn-sm rounded-3 delylobtn`+lastYear+`" onclick="delYLO('`+lastYear+`-2')">ลบ SubPLOs</button>
                </div>
            </div>
        </div>
    `).appendTo("#inputForm");
    document.getElementById("delYear").disabled = false;
}
function getsPLOs(){
    
}
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
        <div class="col-2 p-0 text-center ylo`+ yloID[0] +`">YLO `+ yloID[0] +`-`+ (Number(yloID[1])+1) +`<span class="text-danger"> *</span></div>
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
        <div class="col-2 p-0 text-center Activity`+ ActivityID[0] +`">วิธีการประเมิน `+ ActivityID[0] +`-`+ (Number(ActivityID[1])+1) +`<span class="text-danger"> *</span></div>
        <div class="col-8 p-0">
            <textarea class="w-100 Activityinput`+ ActivityID[0] +`" required autocomplete="off" type="text" id="Activity-`+ ActivityID[0] +`-`+ (Number(ActivityID[1])+1) +`" onchange="haveSameText()"></textarea>
        </div>
        <div class="col-1 p-0 text-center">
            <button type="button" class="btn btn-success btn-sm rounded-3 addActivitybtn`+ ActivityID[0] +`" onclick="addActivity('`+ ActivityID[0] +`-`+ (Number(ActivityID[1])+1) +`')">เพิ่มกิจกรรม</button>
        </div>
        <div class="col-1 p-0 text-center">
            <button type="button" class="btn btn-danger btn-sm rounded-3 delActivitybtn`+ ActivityID[0] +`" onclick="delActivity('`+ ActivityID[0] +`-`+ (Number(ActivityID[1])+1) +`')">ลบกิจกรรม</button>
        </div>
    </div>
    `);
    sortActivity(ActivityID[0])
}

function delYLO(yloID){
    yloID = yloID.split('-')
    $('#' + yloID[0] + "-" + yloID[1]).remove()
    sortNumber(yloID[0])
}
function delActivity(ActivityID){
    ActivityID = ActivityID.split('-')
    $('#' + ActivityID[0] + "-" + ActivityID[1]).remove()
    sortActivity(ActivityID[0])
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
function sortActivity(ActivityID){
    let x = document.getElementsByClassName("Activity" + ActivityID)
    for (let i = 1; i <= x.length; i++) {
        document.getElementsByClassName("Activitybody" + ActivityID)[i-1].setAttribute("id", ActivityID +"-"+ i );
        document.getElementsByClassName("Activity" + ActivityID)[i-1].textContent = "วิธีการประเมิน "+ i;
        document.getElementsByClassName("Activityinput" + ActivityID)[i-1].setAttribute("id", ActivityID +"-"+ i );
        document.getElementsByClassName("addActivitybtn" + ActivityID)[i-1].setAttribute( "onClick", "addActivity('" + ActivityID[0] + "-" + i + "')" );
        document.getElementsByClassName("delActivitybtn" + ActivityID)[i-1].setAttribute( "onClick", "delActivity('" + ActivityID[0] + "-" + i + "')" );
    }
    $(`<span class="text-danger"> *</span>`).appendTo((".Activity" + ActivityID));
    if(x.length == 1) document.getElementsByClassName("delActivitybtn" + ActivityID)[0].disabled = true;
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