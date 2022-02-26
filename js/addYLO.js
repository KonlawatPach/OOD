var lastYear = 2;

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
                    <button type="button" class="btn btn-success btn-sm rounded-3 addylobtn`+lastYear+`" onclick="addYLO('`+lastYear+`-1')">เพิ่ม YLO</button>
                </div>
                <div class="col-1 p-0 text-center">
                    <button type="button" class="btn btn-danger btn-sm rounded-3 delylobtn`+lastYear+`" onclick="delYLO('`+lastYear+`-1')">ลบ YLO</button>
                </div>
            </div>
            <div class="row mt-3 ms-4 ylobody`+lastYear+`" id="`+lastYear+`-2">
                <div class="col-1 p-0 text-center ylo`+lastYear+`">YLO `+lastYear+`-2<span class="text-danger"> *</span></div>
                <div class="col-9 p-0">
                    <textarea class="w-100 yloinput`+lastYear+`" required autocomplete="off" type="text" id="ylo-`+lastYear+`-2" onchange="haveSameText()"></textarea>
                </div>
                <div class="col-1 p-0 text-center">
                    <button type="button" class="btn btn-success btn-sm rounded-3 addylobtn`+lastYear+`" onclick="addYLO('`+lastYear+`-2')">เพิ่ม YLO</button>
                </div>
                <div class="col-1 p-0 text-center">
                    <button type="button" class="btn btn-danger btn-sm rounded-3 delylobtn`+lastYear+`" onclick="delYLO('`+lastYear+`-2')">ลบ YLO</button>
                </div>
            </div>
        </div>
    `).appendTo("#inputForm");
    document.getElementById("delYear").disabled = false;
}

function deleteYear(){
    $('#'+lastYear--).remove()
    if(lastYear == 1){
        document.getElementById("delYear").disabled = true;
    }
}

function addYLO(yloID){
    yloID = yloID.split('-')
    $("#"+ yloID[0] +`-`+ yloID[1] ).after(`
        <div class="row mt-3 ms-4 ylobody`+ yloID[0] +`" id="`+yloID[0] +`-`+(Number(yloID[1])+1)+`">
            <div class="col-1 p-0 text-center ylo`+ yloID[0] +`">YLO `+ yloID[0] +`-`+ (Number(yloID[1])+1) +`<span class="text-danger"> *</span></div>
            <div class="col-9 p-0">
                <textarea class="w-100 yloinput`+ yloID[0] +`" required autocomplete="off" type="text" id="ylo-`+ yloID[0] +`-`+ (Number(yloID[1])+1) +`" onchange="haveSameText()"></textarea>
            </div>
            <div class="col-1 p-0 text-center">
                <button type="button" class="btn btn-success btn-sm rounded-3 addylobtn`+ yloID[0] +`" onclick="addYLO('`+ yloID[0] +`-`+ (Number(yloID[1])+1) +`')">เพิ่ม YLO</button>
            </div>
            <div class="col-1 p-0 text-center">
                <button type="button" class="btn btn-danger btn-sm rounded-3 delylobtn`+ yloID[0] +`" onclick="delYLO('`+ yloID[0] +`-`+ (Number(yloID[1])+1) +`')">ลบ YLO</button>
            </div>
        </div>
    `);
    sortNumber(yloID[0])
}

function delYLO(yloID){
    yloID = yloID.split('-')
    $('#' + yloID[0] + "-" + yloID[1]).remove()
    sortNumber(yloID[0])
}

function sortNumber(yloID){
    let x = document.getElementsByClassName("ylo" + yloID)
    for (let i = 1; i <= x.length; i++) {
        document.getElementsByClassName("ylobody" + yloID)[i-1].setAttribute("id", yloID +"-"+ i );
        document.getElementsByClassName("ylo" + yloID)[i-1].textContent = "YLO "+ yloID +"-"+ i;
        document.getElementsByClassName("yloinput" + yloID)[i-1].setAttribute("id", yloID +"-"+ i );
        document.getElementsByClassName("addylobtn" + yloID)[i-1].setAttribute( "onClick", "addYLO('" + yloID[0] + "-" + i + "')" );
        document.getElementsByClassName("delylobtn" + yloID)[i-1].setAttribute( "onClick", "delYLO('" + yloID[0] + "-" + i + "')" );
    }
    $(`<span class="text-danger"> *</span>`).appendTo((".ylo" + yloID));
    if(x.length == 1) document.getElementsByClassName("delylobtn" + yloID)[0].disabled = true;
    else document.getElementsByClassName("delylobtn" + yloID)[0].disabled = false;
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