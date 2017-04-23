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
        {
            n += 2;
            M = countMWithIndex(n);
        }

        while(true)
        {
            var S = 4, k = 1;
            M = countMWithIndex(n);

            while(k != n - 1)
            {
                S = (S*S - 2)%M;
                k +=1;
            }

            if(S!=0)
            {n+=2;}
            else
            {break;}
        }

        return "Prime number: " + countMWithIndex(n);
    }

    /*
     Lucas–Lehmer(p)
     ►Вход: простое нечётное число p
     S = 4
     k = 1
     M = 2p − 1
     До тех пока k != p - 1 выполнять
     S = ((S × S) − 2) mod M
     k += 1
     Конец цикла
     Если S = 0 выполнять
     Возвратить ПРОСТОЕ
     иначе
     Возвратить СОСТАВНОЕ
     Конец условия
     */

    function countMWithIndex(n)
    {return Math.pow(2, n) - 1;}
});