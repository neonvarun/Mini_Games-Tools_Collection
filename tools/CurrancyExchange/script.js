document.addEventListener('DOMContentLoaded', function () {
    const fromAmountElement = document.querySelector('.ammount');
    const convertedAmountElement = document.querySelector('.convertedAmmount');
    const fromCurrencyElement = document.querySelector('.fromCurrency');
    const toCurrencyElement = document.querySelector('.toCurrency');
    const resultElement = document.querySelector('.result');
    const converterContainer = document.querySelector('.converter-container');

    //Array to populate the select tags with there countries
    const countries = [
        { code: "USD", name: "United States Dollar" },
        { code: "INR", name: "Indian Rupee" },
        { code: "EUR", name: "Euro" },
        { code: "JPY", name: "Japanese Yen" },
        { code: "GBP", name: "British Pound Sterling" },
        { code: "AUD", name: "Australian Dollar" },
        { code: "CAD", name: "Canadian Dollar" },
        { code: "CNY", name: "Chinese Yuan" },
        { code: "CHF", name: "Swiss Franc" },
        { code: "SEK", name: "Swedish Krona" },
        { code: "NZD", name: "New Zealand Dollar" },
        { code: "NOK", name: "Norwegian Krone" },
        { code: "SGD", name: "Singapore Dollar" },
        { code: "KRW", name: "South Korean Won" },
        { code: "BRL", name: "Brazilian Real" },
        { code: "RUB", name: "Russian Ruble" },
        { code: "ZAR", name: "South African Rand" },
        { code: "TRY", name: "Turkish Lira" },
        { code: "AED", name: "United Arab Emirates Dirham" },
    ];

    //showing countries from array to select tag
    countries.forEach(country => {
        const option1 = document.createElement('option');
        option1.value = country.code;
        option1.textContent = `${country.code}(${country.name})`;
        fromCurrencyElement.appendChild(option1);
        console.log(`Added option: ${country.code}(${country.name})`);

        const option2 = document.createElement('option');
        option2.value = country.code;
        option2.textContent = `${country.code}(${country.name})`;
        toCurrencyElement.appendChild(option2);
        console.log(`Added option: ${country.code}(${country.name})`);

        // Setting default value    
        fromCurrencyElement.value = "USD";
        toCurrencyElement.value = "INR";
    });


    const getExchangeRate = async () => {
        const ammount = parseFloat(fromAmountElement.value);
        const fromCurrency = fromCurrencyElement.value;
        const toCurrency = toCurrencyElement.value;
        resultElement.textContent = "Fetching Exchange Rates....."

        try {
            //Fetch data from API
            const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
            const data = await response.json();


            const convertionRate = data.rates[toCurrency];
            const convertedAmmount = (ammount * convertionRate).toFixed(2);

            if (typeof convertionRate === 'undefined') {
                resultElement.textContent = "Exchange rate data is not available for selected country."
                convertedAmountElement = "";
            }

            convertedAmountElement.value = convertedAmmount;
            resultElement.textContent = `${ammount} ${fromCurrency} = ${convertedAmmount} ${toCurrency}`
            console.log(data);
        }
        catch (error) {
            converterContainer.innerHTML = `<h2>Error while fetching exchnage rates!!!</h2>`;
        }
    }

    // Fetching exchange rate when user input the ammount
    fromAmountElement.addEventListener('input', getExchangeRate);

    // Fetching exchange rate when user change currency
    fromCurrencyElement.addEventListener('change', getExchangeRate);
    toCurrencyElement.addEventListener('change', getExchangeRate);


    window.addEventListener('load', getExchangeRate);
}); 
