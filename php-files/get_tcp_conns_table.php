<?php
$a = snmp2_walk("localhost", "assignment1", ".1.3.6.1.2.1.6.13");
$obj = new stdClass();
foreach ($a as $k => $val) {
    $obj-> $k = $val;
}
$hi = json_encode($obj);
print $hi;
exit();