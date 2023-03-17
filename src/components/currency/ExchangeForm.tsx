import { CurrencyForm } from './CurrencyForm'
import { useExchange } from '../../hooks/useExchange'
export function ExchangeForm() {
    const {
        currencies,
        currencyFrom,
        currencyTo,
        convertFrom,
        changeFromValue,
        changeCurrencyFrom,
        change,
        convertTo,
        changeToValue,
        changeCurrencyTo,
    } = useExchange()
    return (
        <>
            <div
                className={
                    'bg-white md:w-4/6 mx-auto mt-3 py-5 px-3 '
                }
            >
                <div className="flex lg:flex-row flex-col justify-between items-center">
                    <CurrencyForm
                        currencies={currencies}
                        currency={currencyFrom}
                        amount={convertFrom}
                        changeHandler={changeFromValue}
                        changeCurrencyHandler={changeCurrencyFrom}
                    />
                    <button
                        className="mx-4 text-5xl font-bold"
                        onClick={change}
                    >
                        <span className={'text-orange-600'}>⇄</span>
                    </button>
                    <CurrencyForm
                        currencies={currencies}
                        currency={currencyTo}
                        amount={convertTo}
                        changeHandler={changeToValue}
                        changeCurrencyHandler={changeCurrencyTo}
                    />
                </div>
                {/*<TransactionRate />*/}
            </div>
        </>
    )
}
