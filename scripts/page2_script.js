const Http = new XMLHttpRequest();
const url='http://localhost/snmp-assignment/php-files/get_ip_addr_table.php';
Http.open("GET", url);
Http.send();

Http.onloadend = (e) => {
    const string = Http.responseText;
    let ipAddrTable;
    try {
        ipAddrTable = JSON.parse(string);
    }
    catch (e){

    }

    const ipAddrTableNode = document.getElementById("IPAddressTable");
    for(let i = 0; i < Object.keys(ipAddrTable).length; i++){
        console.log(ipAddrTable[`${i}`]);
        let tagTr = document.createElement("tr");
        let tagTd0 = document.createElement("td");
        let tagTd1 = document.createElement("td");
        tagTd1.innerText = i.toString();
        tagTd1.innerText = ipAddrTable[`${i}`];
        tagTr.appendChild(tagTd0);
        tagTr.appendChild(tagTd1);
        ipAddrTableNode.appendChild(tagTr);
    }

}
const Http2 = new XMLHttpRequest();
const url2='http://localhost/snmp-assignment/php-files/get_ip_net2media.php';
Http2.open("GET", url2);
Http2.send();

Http2.onloadend = (e) => {
    const string = Http2.responseText;
    let ipNetToMediaTable;
    try {
        ipNetToMediaTable = JSON.parse(string);
    }
    catch (e){

    }

    const ipNetToMediaNode = document.getElementById("IPNetToMediaTable");
    for(let i = 0; i < Object.keys(ipNetToMediaTable).length; i++){
        console.log(ipNetToMediaTable[`${i}`]);
        let tagTr = document.createElement("tr");
        let tagTd0 = document.createElement("td");
        let tagTd1 = document.createElement("td");
        tagTd1.innerText = i.toString();
        tagTd1.innerText = ipNetToMediaTable[`${i}`];
        tagTr.appendChild(tagTd0);
        tagTr.appendChild(tagTd1);
        ipNetToMediaNode.appendChild(tagTr);
    }

}