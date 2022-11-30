const Http = new XMLHttpRequest();
const url = 'http://localhost/snmp-assignment/php-files/get_ip_addr_table.php';
Http.open("GET", url);
Http.send();

Http.onloadend = (e) => {
    const string = Http.responseText;
    let ipAddrTable;
    try {
        ipAddrTable = JSON.parse(string);
    } catch (e) {

    }

    const ipAddrTableNode = document.getElementById("IPAddressTable");
    let N = Object.keys(ipAddrTable).length;
    for (let i = 0; i < N / 5; i++) {
        
        let tagTr = document.createElement("tr");
        let tagTd0 = document.createElement("td");
        let tagTd1 = document.createElement("td");
        let tagTd2 = document.createElement("td");
        let tagTd3 = document.createElement("td");
        let tagTd4 = document.createElement("td");
        let tagTd5 = document.createElement("td");
        tagTd0.innerText = i.toString();
        tagTd1.innerText = ipAddrTable[`${i}`];
        tagTd2.innerText = ipAddrTable[`${i + (N/5)}`];
        tagTd3.innerText = ipAddrTable[`${i + 2 * (N/5)}`];
        tagTd4.innerText = ipAddrTable[`${i + 3 * (N/5)}`];
        tagTd5.innerText = ipAddrTable[`${i + 4 * (N/5)}`];
        tagTr.appendChild(tagTd0);
        tagTr.appendChild(tagTd1);
        tagTr.appendChild(tagTd2);
        tagTr.appendChild(tagTd3);
        tagTr.appendChild(tagTd4);
        tagTr.appendChild(tagTd5);
        ipAddrTableNode.appendChild(tagTr);
    }

}
const Http2 = new XMLHttpRequest();
const url2 = 'http://localhost/snmp-assignment/php-files/get_ip_net2media.php';
Http2.open("GET", url2);
Http2.send();

Http2.onloadend = (e) => {
    const string = Http2.responseText;
    let ipNetToMediaTable;
    try {
        ipNetToMediaTable = JSON.parse(string);
    } catch (e) {

    }

    const ipNetToMediaNode = document.getElementById("IPNetToMediaTable");
    let N = Object.keys(ipNetToMediaTable).length;
    for (let i = 0; i < N / 4; i++) {
        console.log(ipNetToMediaTable[`${i}`]);
        let tagTr = document.createElement("tr");
        let tagTd0 = document.createElement("td");
        let tagTd1 = document.createElement("td");
        let tagTd2 = document.createElement("td");
        let tagTd3 = document.createElement("td");
        let tagTd4 = document.createElement("td");
        tagTd0.innerText = i.toString();
        tagTd1.innerText = ipNetToMediaTable[`${i}`];
        tagTd2.innerText = ipNetToMediaTable[`${i + (N/4)}`];
        tagTd3.innerText = ipNetToMediaTable[`${i + 2 * (N/4)}`];
        tagTd4.innerText = ipNetToMediaTable[`${i + 3 * (N/4)}`];
        tagTr.appendChild(tagTd0);
        tagTr.appendChild(tagTd1);
        tagTr.appendChild(tagTd2);
        tagTr.appendChild(tagTd3);
        tagTr.appendChild(tagTd4);
        ipNetToMediaNode.appendChild(tagTr);
    }

}