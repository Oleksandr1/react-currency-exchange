import {useContext} from "react";
import {ExchangeContext} from "../context/exchangeContext";
import {iRate} from "../models/iRate";

export function Footer() {
    const { rates } = useContext(ExchangeContext)
    const supportedCurrencies = rates.map((rate:iRate) => rate.currency)
    return (
        <div className="w-full  bg-orange-600 pb-10 mt-6 flex flex-col items-center">
            <div className={'text-3xl text-white my-10'}>Supported currencies:</div>
            <div className={'flex flex-wrap  items-center px-28'}>
            {
                supportedCurrencies.map((item:string) => {
                    return <span className={'w-1/2 md:w-1/3 text-white' } key={item}> {item}</span>
                })
            }
            </div>
        </div>
    )
}
