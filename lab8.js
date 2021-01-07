function z1()
{
    var num = prompt("введите число овец");
    for(var i = 1;i<=num;i++)
    {
        console.log(i, 'овечка');
    }
}

function z2()
{
    for(var i = 0;i<=15;i++)
    {
        if((i%2)==0)
        {
            console.log(i,' четное');
        }
        else{
            console.log(i,' нечетное');
        }
    }
}

function z3()
{
  for(var i=0;i<4;i++)
  {
    console.log(" # # # #");
    console.log("# # # # ");
  }
}

function z4()
{
    var x1 = prompt('num1');
    var x2 = prompt('num2');
    var x3 = prompt('num3');

    x1 = Number(x1);
    x2 = Number(x2);
    x3 = Number(x3);
    if(x1 < x2 && x2 < x3)
    {
        console.log(x1,' ',x2,' ',x3);
    }
    else if(x1 < x3 && x3 < x2)
    {
        console.log(x1,' ',x3,' ',x2);
    }
    else if(x2 < x1 && x1 < x3)
    {
        console.log(x2,' ',x1,' ',x3);
    }
    else if(x2 < x3 && x3 < x1)
    {
        console.log(x2,' ',x3,' ',x1);
    }
    else if(x3 < x1 && x1 < x2)
    {
        console.log(x3,' ',x1,' ',x2);
    }
    else if(x3 < x2 && x2 < x1)
    {
        console.log(x3,' ',x2,' ',x1);
    }
    
}

function z5()
{   
    let arr = [];
    var x1 = Number(prompt('num1'));
    var x2 = Number(prompt('num2'));
    var x3 = Number(prompt('num3'));
    var x4 = Number(prompt('num4'));
    var x5 = Number(prompt('num5'));
    arr.push(x1);
    arr.push(x2);
    arr.push(x3);
    arr.push(x4);
    arr.push(x5);
    
    for(var bignum=arr[0],i=0;i<=4;i++)
    {
        if(bignum<arr[i])
        {
            bignum = arr[i];
        }
    }
    console.log('output',bignum)
}