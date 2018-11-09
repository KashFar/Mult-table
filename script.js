
document.write("<table border='1px'>");
document.write("<td style='width:20px'><font size='3'>X</font></td>");

for (let i = 0; i <= 10; i++) {
    document.write(
    "<td style = 'background-color: #7e6ff3' style='width:20px'><font size='3'>"
        + i + "</font></td>");
}

for (var a = 0; a <= 10; a++) {
    document.write("<tr style = 'background-color: #7e6ff3'></tr>");
    document.write("<td style = 'background-color: #7e6ff3'>" + a + "</td>");

    for (var b = 0; b <= 10; b++) {
        document.write("<td style='width:20px'><font size='3'>"
            + a * b + "</font></td>");
    }
}