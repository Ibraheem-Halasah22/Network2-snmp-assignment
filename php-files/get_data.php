<?php
$a = snmp2_get("localhost","assignment1",".1.3.6.1.2.1.1.7.0");
//$i = 0;
//echo "<table>";
//foreach ($a as $k=>$val) {
//    echo "<tr> <td> $i </td><td> $a[$i] </td> </tr>";
//    //  echo "($i) $val  $b[$i] ------ $c[$i] <br>\n";
//    $i++;
//}
//echo "</table>"
echo $a;
?>

