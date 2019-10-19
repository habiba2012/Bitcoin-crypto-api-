class View {
    constructor() {
        this.btnGetApi = document.querySelector("#btnGetApi");
        this.outputPosts = document.querySelector("#outputPosts");


        this.getApi();
    }


    getApi() {
        this.btnGetApi.addEventListener("click", () => {
            fetch('https://apiv2.bitcoinaverage.com/constants/exchangerates/global')
                .then(res => { return res.json() })
                .then((data) => {
                    console.log(Object.keys(data.rates));

                    let output = "<h2> Posts </h2>";

                    let rates = Object.keys(data.rates);

                    rates.forEach(rate => {
                        output += `
                            <h3>name: ${data.rates[rate].name}</h3>
                            <h3>rate: ${data.rates[rate].rate}</h3>
                            `
                    });

                    this.outputPosts.innerHTML = output;


                })
        })

    }

}

export default View