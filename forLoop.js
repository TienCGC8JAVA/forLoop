function task1()
{
    let text = "";
    let i=0;
    for (; i < 5; i++)
    {
        text += "The number is " + i + "<br/>";
    }
    document.getElementById("demo").innerHTML = text;
}

function task2()
{
    let number = parseInt(prompt("Nhập vào 1 số bất kỳ:"));
    let total = 0;
    for (let i = 0; i <= number; i += 1)
    {
        total = total + i;
    }
    alert(total);
}