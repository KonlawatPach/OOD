class Outline {
    constructor(Outline_Title) {
      this.Academic_Year = 2565;
      this.CID = "204321";
      this.Outline_Title = Outline_Title;
      this.Semester = 1;
    }
}

let lastOutlinenumber = 2;

function addType(typenumber){
    $("#t"+ typenumber ).after(
        `<div class="row mt-1 text-end" id="t1">
            <div class="col-3 px-0">
                <div>ลักษณะการเก็บชั่วโมงแบบที่ 1</div>
            </div>
            <div class="col-4 px-4">
                <input class="w-100 hourtype" type="text">
            </div>
            <div class="col-2 px-0">
                <button type="button" class="btn btn-success btn-sm rounded-3" onclick="addType(1)">เพิ่มลักษณะการเก็บชั่วโมง</button>
            </div>
            <div class="col-2 px-0">
                <button type="button" class="btn btn-danger btn-sm rounded-3" onclick="delType(1)">ลบลักษณะการเก็บชั่วโมง</button>
            </div>
        </div>`
    );
    $(".olnum2").show()
}

function delType(typenumber){
    $("#t" + typenumber).remove();
    $(".olnum2").hide()
}

function addOutling(){
    $(
        `<div class="mt-3 me-3 row" id="`+ (++lastOutlinenumber) +`">
            <div class="col-1 text-center on">
                `+lastOutlinenumber+`
            </div>
            <div class="col-8">
                <input class="w-100 oin" required autocomplete="off" type="text">
            </div>
            <div class="col-1">
                <button type="button" class="btn btn-sm btn-primary" onclick="addSubOutLine()">+</button>
            </div>
            <div class="col-1">
                <input class="w-100 olnum1" type="number" max="100" min="0">
            </div>
            <div class="col-1">
                <input class="w-100 olnum2" type="number" max="100" min="0">
            </div>
        </div>`
    ).appendTo("#bodyinputForm");
    sortOutline()
}

function delOutling(){
    $("#" + (lastOutlinenumber--)).remove();
    sortOutline()
}

function sortOutline(){
    
    for(let i=0; i < document.getElementsByClassName("ol").length; i++){
        document.getElementsByClassName("on")[i].textContent = i+1;
    }
    if(lastOutlinenumber <= 1) document.getElementById("deleteOutline").disabled = true;
    else document.getElementById("deleteOutline").disabled = false;
}

// ส่วนของการ validation
$("#Outlineform").submit(function(e) {
    e.preventDefault();
});

async function addOutlineData(){
    if(haveoneNum()){
        if(!await isInDatabase()){
            //new object
            let outline = [];
            for (let i = 1; i <= document.getElementsByClassName("oin").length; i++){
                outline.push(new Outline(document.getElementsByClassName("oin")[i-1].value))
            }       
            
            //add to database
            for(let i of outline){
                db.collection("COURSE_OUTLINE").add({
                    Academic_Year : i.Academic_Year,
                    CID : i.CID,
                    Outline_Title : i.Outline_Title,
                    Semester : i.Semester
                });
            }
            alert("เพิ่มข้อมูล CourseOutline สำเร็จ")
        }
        else{
            alert("มีข้อมูล CourseOutline นี้ในระบบอยู่แล้ว")
        }
    }
    else{
        alert("กรุณาระบุตัวเลขอย่างน้อย 1 ลักษณะและถ้าไม่ระบุให้เว้นช่องว่างไว้")
    }
}

function haveoneNum(){
    if(document.getElementsByClassName("olnum2")[1].style.display != "none"){
        for(let x=1; x < document.getElementsByClassName("olnum1").length; x++){
            if(document.getElementsByClassName("olnum1")[x].value == "" && document.getElementsByClassName("olnum2")[x].value == ""){
                return false;
            }
            return true;
        }
    }
    else{
        for(let x=1; x < document.getElementsByClassName("olnum1").length; x++){
            if(document.getElementsByClassName("olnum1")[x].value == ""){
                return false;
            }
            return true;
        }
    }
}

async function isInDatabase(){
    let have = false;
    await db.collection("COURSE_OUTLINE").where( "CID", "==", "204321").get().then((oldata) => {
        oldata.forEach((doc) => {
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