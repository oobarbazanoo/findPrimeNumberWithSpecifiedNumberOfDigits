$(function()
{
    var EMPTY_SET = "∅";
    $("#button").click(function()
    {showAnswer(countPrimeNumberWithDigits(getNumberOfDigits()));});

    function getNumberOfDigits()
    {return $("#numberOfDigits").val();}

    function showAnswer(answer)
    {$("#showAnswer").text(answer);}

    function countPrimeNumberWithDigits(numberOfDigits)
    {
        if(numberOfDigits < 1)
        {return "Please give a valid input!";}

        var shouldBeMoreThanThis = Math.pow(10, numberOfDigits-1), n = 3, M = countMWithIndex(n);
        while(M < shouldBeMoreThanThis)
        {n += 2; M = countMWithIndex(n);}

        console.log(n);

        var time = performance.now();

        while(!isLucasLehmerPrime(n))
        {n+=2;}

        time = performance.now() - time;
        time = Math.round(time);
        time/=1000;

        var answer=countMWithIndex(n);
        
        var numbOfDigits = getLength(answer);
        
        return "(spent "+ time +" sec; digits: "+ numbOfDigits +")Prime number: " + answer;
    }

    function isLucasLehmerPrime(p)
    {
        var s = new Big(4);
        var m = new Big(2).pow(p).minus(1);
        for(var i = p - 2; i > 0 ; i--)
        {
            if((s = s.pow(2).minus(2).mod(m)).eq(0))
            {return true;}
        }
        return false;
    }

    function countMWithIndex(n)
    {return (new Big(2)).pow(n).minus(1)}
    
    function getLength(number) 
    {return number.toString().length;}
});
