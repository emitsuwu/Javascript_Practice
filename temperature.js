const readline = require('readline').createInterface
({
    input: process.stdin,
    output: process.stdout
})
readline.question('What is your current temperature in Fahrenheit, and I will convert it into Celsius? ', (temp) => 
{
    temp = (temp - 32) * (5 / 9)
    console.log('The temperature in Celsius is ' + (temp) + ' degrees!')
    if (temp < 15)
    {
        console.log('This is the correct if statement, and I should be saying something related to how your temperature is low.')
    }
    else if (temp >= 15)
    {
        console.log("Man it's kinda spicy in here don'tcha think???")
    }
    readline.close()
})
