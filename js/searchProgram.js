function findProgram(){
    db.collection("PROGRAM").where( "ProgramID", "==", document.getElementById("searchbar").value ).get().then((Pdata) => {
        $("#programlist").html("");
        Pdata.forEach((doc) => {
            if(doc.data().status){
                $(`
                    <div class="row mx-auto bg-white rounded-3 border border-2 border-dark" style="height: 100px;">
                        <div class="align-middle px-0"></div>
                        <div class="col-2 text-center px-0 PID">`+ doc.data().ProgramID +`</div>
                        <div class="col-2 text-center px-0 PnameTH">`+ doc.data().PnameTH +`</div>
                        <div class="col-2 text-center px-0 PnameENG">`+ doc.data().Pname +`</div>
                        <div class="col-2 text-center px-0 Status">
                            <div class="bg-success rounded-circle mx-auto border border-2 border-dark" style="height: 30px; width: 30px;"></div>
                        </div>
                        <div class="col-4 text-center">
                            <button type="button" class="btn btn-md btn-primary rounded-pill">ตรวจสอบข้อมูล</button>
                        </div>
                    </div>
                `).appendTo("#programlist");
            }
            else{
                $(`
                    <div class="row mx-auto bg-white rounded-3 border border-2 border-dark" style="height: 100px;">
                        <div class="align-middle px-0"></div>
                        <div class="col-2 text-center px-0 PID">`+ doc.data().ProgramID +`</div>
                        <div class="col-2 text-center px-0 PnameTH">`+ doc.data().PnameTH +`</div>
                        <div class="col-2 text-center px-0 PnameENG">`+ doc.data().Pname +`</div>
                        <div class="col-2 text-center px-0 Status">
                            <div class="bg-danger rounded-circle mx-auto border border-2 border-dark" style="height: 30px; width: 30px;"></div>
                        </div>
                        <div class="col-4 text-center">
                            <button type="button" class="btn btn-md btn-primary rounded-pill">ตรวจสอบข้อมูล</button>
                        </div>
                    </div>
                `).appendTo("#programlist");
            }
        });
    });
}