function marksgrade()
{
if (document.form1.text1.value >=90)
alert('Grade AA');
else
if (document.form1.text1.value >80 && document.form1.text1.value <=90)
{
alert('Grade AB');
}
else
if (document.form1.text1.value >70 && document.form1.text1.value <=80)
{
alert('Grade BB');
}
else
if (document.form1.text1.value >60 && document.form1.text1.value <=70)
{
alert('Grade BC');
}
else
if(document.form1.text1.value >50 && document.form1.text1.value <=60)
{
    alert('Grade CC');
}
else
if (document.form1.text1.value >40 && document.form1.text1.value <=50)
{
alert('Grade CD');
}
else
if (document.form1.text1.value >30 && document.form1.text1.value <=40)
{
alert('Grade DD');
}
else
if (document.form1.text1.value <=30)
{
alert('Grade FF');
}
else
alert();
}
