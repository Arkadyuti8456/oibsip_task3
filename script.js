function ConvertTemperature()
{
    let val=document.getElementById("inputValue");
    let result=document.getElementById("result");
    let input=document.getElementById("input");
    let output=document.getElementById("output");

    val.addEventListener("keyup", ConvertTemperature);
    input.addEventListener("change", ConvertTemperature);
    output.addEventListener("change", ConvertTemperature);
    let InputValue=input.value;
    let OutputValue=output.value;
    // Converting from Celsius to Fahrenheit and Kelvin
    if(InputValue==="celsius" && OutputValue==="fahrenheit")
    {
        result.value=Number((val.value*9)/5)+32;
    }
    else if(InputValue==="celsius" && OutputValue==="kelvin")
    {
        result.value=Number(val.value)+273.15;
    }
    else if(InputValue==="celsius" && OutputValue==="celsius")
    {
        result.value=val.value;
    }

    // Converting from Fahrenheit to Celsius and Kelvin
    if(InputValue==="fahrenheit" && OutputValue==="celsius")
    {
        result.value=Number((val.value-32)*5)/9;
    }
    else if(InputValue==="fahrenheit" && OutputValue==="kelvin")
    {
        result.value=Number(((val.value-32)*5)/9)+273.15;
    }
    else if(InputValue==="fahrenheit" && OutputValue==="fahrenheit")
    {
        result.value=val.value;
    }

    // Converting from Kelvin to Celsius and Fahrenheit

    if(InputValue==="kelvin" && OutputValue==="celsius")
    {
        result.value=Number(val.value)-273.15;
    }
    else if(InputValue==="kelvin" && OutputValue==="fahrenheit")
    {
        result.value=Number(((val.value-273.15)*9)/5)+32;
    }
    else if(InputValue==="kelvin" && OutputValue==="kelvin")
    {
        result.value=val.value;
    }
}