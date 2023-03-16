import { CurrencyRate } from './currency/CurrencyRate'
import { BsCurrencyExchange } from 'react-icons/bs'
import { useContext } from 'react'
import { ExchangeContext } from '../context/exchangeContext'
import { iRate } from '../models/iRate'
export function Header() {
    const { rates } = useContext(ExchangeContext)
    const mainCurrencies = ['USD', 'EUR', 'GBP', 'CAD']
    const currencies = rates.filter((i) => mainCurrencies.includes(i.currency))

    return (
        <div className="w-full md:h-20 h-auto pb-4 bg-orange-600 md:py-4 flex items-center">
            <div className="w-full px-4 mx-auto my-3 flex-col md:flex justify-between ">
                <div className="text-2xl text-white italic flex w-fit mx-auto">
                    <BsCurrencyExchange />
                    <span className={'mx-3'}>EXCHANGE</span>
                </div>
                <div className={'flex flex-wrap justify-center'}>
                    {currencies.map((rate: iRate) => {
                        return (
                            <CurrencyRate
                                title={rate.currency}
                                sale={rate.saleRateNB}
                                purchase={rate.purchaseRateNB}
                                key={rate.currency}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
