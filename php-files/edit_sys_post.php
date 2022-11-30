<?php
$sysContactNewValue = isset($_POST['sysContact']) ? $_POST['sysContact'] : '';
$sysLocationNewValue = isset($_POST['sysLocation']) ? $_POST['sysLocation'] : '';

snmp2_set("localhost","assignment1",'.1.3.6.1.2.1.1.4.0','s',$sysContactNewValue);
snmp2_set("localhost","assignment1",'.1.3.6.1.2.1.1.6.0','s',$sysLocationNewValue);

header("Location:../html-files/page1.html");