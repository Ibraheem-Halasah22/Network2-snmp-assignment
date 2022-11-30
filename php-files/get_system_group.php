<?php

$a = snmp2_walk("localhost", "assignment1", ".1.3.6.1.2.1.1");

//foreach ($a as $k => $val) {
//    echo "$k $val \n";
//}
//$sysGroupNamesArray = array("sysDescr", "sysObjectID", "sysUpTime", "sysContact", "sysName", "sysLocation", "sysServices");
$obj = new stdClass();
foreach ($a as $k => $val) {
    $obj-> $k = $val;
}
$hi = json_encode($obj);
print $hi;
exit();
?>