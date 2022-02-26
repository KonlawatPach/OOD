function addPLO(PLOnumber){
    $(`
        <div class="bg-light rounded-3 mt-3 p-2 px-3" id="`+ ++PLOnumber +`">
            <div class="row">
                <div class="col-10">
                    <h6 class="fw-bold plo">(`+ PLOnumber +`) ผลลัพธ์การเรียนรู้หลักสูตร (Program Learning Outcomes: PLOs)</h6>
                    <textarea class="mt-2 ploinput" required autocomplete="off" style="width: 80%;"></textarea>
                </div>
                <div class="col-1 text-center px-0">
                    <button type="button" class="btn btn-primary" onclick="addPLO(`+ PLOnumber +`);">เพิ่ม PLO</button>
                </div>
                <div class="col-1 text-center px-0">
                    <button type="button" class="btn btn-danger delplobtn" onclick="delPLO(`+ PLOnumber +`)">ลบ PLO</button>
                </div>

                <div class="row subplo`+ PLOnumber +`" id="`+ PLOnumber +`-1">
                    <div class="col-2 mt-3 text-end subplotext`+ PLOnumber +`">SubPLOs `+ PLOnumber +`.1</div>
                    <div class="col-8">
                        <textarea class="w-100 mt-2 subploinput`+ PLOnumber +`" required autocomplete="off" id="subploinput`+ PLOnumber +`-1"></textarea>
                    </div>
                    <div class="col-1 px-0 text-center">
                        <button type="button" class="btn btn-sm btn-success mt-2 addsubplobtn`+ PLOnumber +`" style="font-size: 13px; height: 34px;" onclick="addSubPLO('`+ PLOnumber +`-1')">เพิ่ม SubPLO</button>
                    </div>
                    <div class="col-1 px-0 text-center">
                        <button type="button" class="btn btn-sm btn-danger mt-2 delsubplobtn`+ PLOnumber +`" style="font-size: 13px; height: 34px;" onclick="delSubPLO('`+ PLOnumber +`-1')">ลบ SubPLO</button>
                    </div>
                </div>

                <div class="row subplo`+ PLOnumber +`" id="`+ PLOnumber +`-2">
                    <div class="col-2 mt-3 text-end subplotext`+ PLOnumber +`">SubPLOs `+ PLOnumber +`.2</div>
                    <div class="col-8">
                        <textarea class="w-100 mt-2 subploinput`+ PLOnumber +`" required autocomplete="off" id="subploinput`+ PLOnumber +`-2"></textarea>
                    </div>
                    <div class="col-1 px-0 text-center">
                        <button type="button" class="btn btn-sm btn-success mt-2 addsubplobtn`+ PLOnumber +`" style="font-size: 13px; height: 34px;" onclick="addSubPLO('`+ PLOnumber +`-2')">เพิ่ม SubPLO</button>
                    </div>
                    <div class="col-1 px-0 text-center">
                        <button type="button" class="btn btn-sm btn-danger mt-2 delsubplobtn`+ PLOnumber +`" style="font-size: 13px; height: 34px;" onclick="delSubPLO('`+ PLOnumber +`-2')">ลบ SubPLO</button>
                    </div>
                </div>

            </div>
        </div>
    `).appendTo("#inputForm");
    sortPLO();
}

function delPLO(PLOnumber){
    $("#" + PLOnumber).remove();
    sortPLO();
}

function sortPLO(){
    let x = document.getElementsByClassName("plo")
    for (let i = 1; i <= x.length; i++) {
        document.getElementsByClassName("plo")[i-1].textContent = "("+ i +") ผลลัพธ์การเรียนรู้หลักสูตร (Program Learning Outcomes: PLOs)"; 
    }
    if(x.length == 1) document.getElementsByClassName("delplobtn")[0].disabled = true;
    else document.getElementsByClassName("delplobtn")[0].disabled = false;
}

function addSubPLO(subPLONumber){
    subPLONumber = subPLONumber.split('-')
    $("#"+ subPLONumber[0] +`-`+ subPLONumber[1]).after(`
        <div class="row subplo`+ subPLONumber[0] +`" id="`+ subPLONumber[0] +`-`+ (Number(subPLONumber[1])+1) +`">
            <div class="col-2 mt-3 text-end subplotext`+ subPLONumber[0] +`">SubPLOs ` + subPLONumber[0] +`.`+ (Number(subPLONumber[1])+1) + `</div>
            <div class="col-8">
                <textarea class="w-100 mt-2 subploinput`+ subPLONumber[0] +`" required autocomplete="off" id="subploinput`+ subPLONumber[0] +`-`+ (Number(subPLONumber[1])+1) +`"></textarea>
            </div>
            <div class="col-1 px-0 text-center">
                <button type="button" class="btn btn-sm btn-success mt-2 addsubplobtn`+ subPLONumber[0] +`" style="font-size: 13px; height: 34px;" onclick="addSubPLO('`+ subPLONumber[0] +`-`+ (Number(subPLONumber[1])+1) +`')">เพิ่ม SubPLO</button>
            </div>
            <div class="col-1 px-0 text-center">
                <button type="button" class="btn btn-sm btn-danger mt-2 delsubplobtn`+ subPLONumber[0] +`" style="font-size: 13px; height: 34px;" onclick="delSubPLO('`+ subPLONumber[0] +`-`+ (Number(subPLONumber[1])+1) +`')">ลบ SubPLO</button>
            </div>
        </div>
    `);
    sortSubPLO(subPLONumber[0])
}

function delSubPLO(subPLONumber){
    subPLONumber = subPLONumber.split('-')
    $('#' + subPLONumber[0] + "-" + subPLONumber[1]).remove()
    sortSubPLO(subPLONumber[0])
}

function sortSubPLO(subPLONumber){
    let x = document.getElementsByClassName("subplo"+subPLONumber)
    for (let i = 1; i <= x.length; i++) {
        document.getElementsByClassName("subplo" + subPLONumber)[i-1].setAttribute("id", subPLONumber +"-"+ i );
        document.getElementsByClassName("subplotext" + subPLONumber)[i-1].textContent = "SubPLOs "+ subPLONumber +"."+ i;
        document.getElementsByClassName("subploinput" + subPLONumber)[i-1].setAttribute("id", subPLONumber +"-"+ i );
        document.getElementsByClassName("addsubplobtn" + subPLONumber)[i-1].setAttribute( "onClick", "addSubPLO('"+ subPLONumber + "-"+ i +"')" );
        document.getElementsByClassName("delsubplobtn" + subPLONumber)[i-1].setAttribute( "onClick", "delSubPLO('"+ subPLONumber + "-"+ i +"')" );
    }
    if(x.length == 1) document.getElementsByClassName("delsubplobtn"+subPLONumber)[0].disabled = true;
    else document.getElementsByClassName("delsubplobtn"+subPLONumber)[0].disabled = false;
}

// ส่วนของการ validation
$("#PLOSubPLOform").submit(function(e) {
    e.preventDefault();
});

function addPLOSubPLOData(){
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
    let allplo = document.getElementsByClassName("ploinput")
    for (let plo = 1; plo <= allplo.length; plo++) {
        choosetext = document.getElementsByClassName("ploinput")[plo-1].value;
        for (let cplo = 1; cplo <= allplo.length; cplo++) {
            comparetext = document.getElementsByClassName("ploinput")[cplo-1].value;
            if(choosetext == comparetext && (plo != cplo)){
                document.getElementsByClassName("ploinput")[plo-1].style.borderColor = "red";
                document.getElementsByClassName("ploinput")[cplo-1].style.borderColor = "red";
                document.getElementsByClassName("ploinput")[cplo-1].scrollIntoView();
                hasSame = true;
            }
        }
    }

    for (let plo = 1; plo <= allplo.length; plo++) {
        let x = document.getElementsByClassName("subploinput"+plo)
        for (let i = 1; i <= x.length; i++) {
            choosetext = document.getElementsByClassName("subploinput"+plo)[i-1].value;

            //compare loop zone
            if(choosetext != ''){
                for (let cplo = 1; cplo <= allplo.length; cplo++) {
                    let y = document.getElementsByClassName("subploinput"+plo)
                    for (let j = 1; j <= y.length; j++) {
                        comparetext = document.getElementsByClassName("subploinput"+cplo)[j-1].value;
                        if(choosetext == comparetext && (plo != cplo || i != j)){
                            document.getElementsByClassName("subploinput"+plo)[i-1].borderColor = "red";
                            document.getElementsByClassName("subploinput"+cplo)[j-1].style.borderColor = "red";
                            document.getElementsByClassName("subploinput"+cplo)[j-1].scrollIntoView();
                            hasSame = true;
                        }
                    }
                }
            }
        }
    }
    return hasSame;
}