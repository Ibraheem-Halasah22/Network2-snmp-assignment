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
    let N = Object.keys(tcpConnsTable).length;
    let flag
    for (let i = 0; i < N / 5; i++) {
        console.log(tcpConnsTable[`${i}`]);
        let tagTr = document.createElement("tr");
        let tagTd0 = document.createElement("td");
        let tagTd1 = document.createElement("td");
        let tagTd2 = document.createElement("td");
        let tagTd3 = document.createElement("td");
        let tagTd4 = document.createElement("td");
        let tagTd5 = document.createElement("td");
        tagTd0.innerText = i.toString();
        tagTd1.innerText = tcpConnsTable[`${i}`];
        tagTd2.innerText = tcpConnsTable[`${i + (N/5)}`];
        tagTd3.innerText = tcpConnsTable[`${i + 2 * (N/5)}`];
        tagTd4.innerText = tcpConnsTable[`${i + 3 * (N/5)}`];
        tagTd5.innerText = tcpConnsTable[`${i + 4 * (N/5)}`];
        tagTr.appendChild(tagTd0);
        tagTr.appendChild(tagTd1);
        tagTr.appendChild(tagTd2);
        tagTr.appendChild(tagTd3);
        tagTr.appendChild(tagTd4);
        tagTr.appendChild(tagTd5);
        tcpConnsTableNode.appendChild(tagTr);
    }

}