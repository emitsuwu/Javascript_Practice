const readline = require('readline').createInterface
({
    input: process.stdin,
    output: process.stdout
})
readline.question('Enter a number to compare to 7. ', (temp) =>
{
    if(temp > 7)
    {
        console.log(temp + " is bigger than 7.")
    }
    else
    {
        console.log(temp + " isn't bigger than 7.")
    }
    readline.close()
})
