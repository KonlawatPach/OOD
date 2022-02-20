var lastYear = 2;

function addYear(){
    lastYear++
    $(`
        <div class="bg-light mt-1 p-3 rounded-2" id="`+lastYear+`">
            <h5 class="ms-1 fw-bold">ชั้นปีที่ `+ lastYear +`</h5>
            <div class="row mt-3 ms-4" id="`+ lastYear +`-1">
                <div class="col-1 p-0 text-center">YLO `+ lastYear +`-1</div>
                <div class="col-9 p-0">
                    <input class="w-100" type="text" id="ylo-`+ lastYear +`-1">
                </div>
                <div class="col-1 p-0 text-center">
                    <button class="btn-success rounded-3" onclick="addYLO('`+ lastYear +`-1')">เพิ่ม YLO</button>
                </div>
                <div class="col-1 p-0 text-center">
                    <button class="btn-danger rounded-3" onclick="delYLO('`+ lastYear +`-1')">ลบ YLO</button>
                </div>
            </div>
        </div>
    `).appendTo("#inputFrom");
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
    $(`
        <div class="row mt-3 ms-4" id="`+yloID[0] +`-`+(Number(yloID[1])+1)+`">
            <div class="col-1 p-0 text-center">YLO `+ yloID[0] +`-`+ (Number(yloID[1])+1) +`</div>
            <div class="col-9 p-0">
                <input class="w-100" type="text" id="ylo-`+ yloID[0] +`-`+ (Number(yloID[1])+1) +`">
            </div>
            <div class="col-1 p-0 text-center">
                <button class="btn-success rounded-3" onclick="addYLO('`+ yloID[0] +`-`+ (Number(yloID[1])+1) +`')">เพิ่ม YLO</button>
            </div>
            <div class="col-1 p-0 text-center">
                <button class="btn-danger rounded-3" onclick="delYLO('`+ yloID[0] +`-`+ (Number(yloID[1])+1) +`')">ลบ YLO</button>
            </div>
        </div>
    `).appendTo("#" + yloID[0]);
    sortNumber(yloID[0])
}

function delYLO(yloID){
    yloID = yloID.split('-')
    $('#' + yloID[0] + "-" + yloID[1]).remove()
    sortNumber(yloID[0])
}

function sortNumber(yloID){
    //
}