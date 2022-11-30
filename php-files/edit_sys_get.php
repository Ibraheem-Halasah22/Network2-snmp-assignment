<?php
$sysContactNewValue = isset($_GET['sysContact']) ? $_GET['sysContact'] : '';
$sysLocationNewValue = isset($_GET['sysLocation']) ? $_GET['sysLocation'] : '';

snmp2_set("localhost","assignment1",'.1.3.6.1.2.1.1.6.0','s',$sysContactNewValue);
snmp2_set("localhost","assignment1",'.1.3.6.1.2.1.1.4.0','s',$sysLocationNewValue);

header("Location:../html-files/page1.html");
