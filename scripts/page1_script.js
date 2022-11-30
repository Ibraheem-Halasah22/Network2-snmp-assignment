const Http = new XMLHttpRequest();
const url='http://localhost/snmp-assignment/php-files/get_system_group.php';
Http.open("GET", url);
Http.send();

Http.onloadend = (e) => {
    const string = Http.responseText;
    const systemGroupNames = ["sysDescr", "sysObjectID", "sysUpTime", "sysContact", "sysName",
        "sysLocation", "sysServices"];
    let sysGroup;
    try {
        sysGroup = JSON.parse(string);
    }
    catch (e){

    }
    //const sysGroup = JSON.parse(string);
    for(let i = 0; i < Object.keys(sysGroup).length; i++){
        console.log(sysGroup[`${i}`]);
        let tagTr = document.createElement("tr");
        let tagTd0 = document.createElement("td");
        let tagTd1 = document.createElement("td");
        tagTd0.innerText = systemGroupNames[i];
        tagTd1.innerText = sysGroup[`${i}`];
        tagTr.appendChild(tagTd0);
        tagTr.appendChild(tagTd1);
        document.getElementById("systemGroupTable").appendChild(tagTr);
    }

}

function sendDataUsingGet(){
    const form = document.getElementById("sysNewDataForm");
    form.setAttribute("method", "get");
    form.setAttribute("action", "../php-files/edit_sys_get.php");
    form.submit();
}
function sendDataUsingPost(){
    const form = document.getElementById("sysNewDataForm");
    form.setAttribute("method", "post");
    form.setAttribute("action", "../php-files/edit_sys_post.php");
    form.submit();
}