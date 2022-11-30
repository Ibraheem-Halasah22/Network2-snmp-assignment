const Http = new XMLHttpRequest();
const url='http://localhost/snmp-assignment/php-files/get_tcp_conns_table.php';
Http.open("GET", url);
Http.send();

Http.onloadend = (e) => {
    const string = Http.responseText;
    let tcpConnsTable;
    try {
        tcpConnsTable = JSON.parse(string);
    }
    catch (e){

    }

    const tcpConnsTableNode = document.getElementById("TCPConnectionsTable");
    for(let i = 0; i < Object.keys(tcpConnsTable).length; i++){
        console.log(tcpConnsTable[`${i}`]);
        let tagTr = document.createElement("tr");
        let tagTd0 = document.createElement("td");
        let tagTd1 = document.createElement("td");
        tagTd1.innerText = i.toString();
        tagTd1.innerText = tcpConnsTable[`${i}`];
        tagTr.appendChild(tagTd0);
        tagTr.appendChild(tagTd1);
        tcpConnsTableNode.appendChild(tagTr);
    }

}