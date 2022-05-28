async function main() {
    // const timeChartCanvas = document.querySelector("#time-chart");
    // const highestPriceChartCanvas = document.querySelector(
    //     "#highest-price-chart"
    // );
    // const averagePriceChartCanvas = document.querySelector(
    //     "#average-price-chart"
    // );
    //prettier-ignore
    let stocks = await fetch("https://api.twelvedata.com/time_series?symbol=GME,MSFT/DIS,BNTX:Huobi,TRP:TSX&interval=1min&apikey=27d06d6c78614f12a3ca675fae22e9e5")

    let response = await stocks.json();
    console.log(response);
}

main();
