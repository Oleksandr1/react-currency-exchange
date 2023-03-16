import React, { ChangeEvent } from 'react'

interface CurrencyFormProps {
    currencies: string[]
    amount: string
    changeHandler: (value: string) => void
    changeCurrencyHandler: any
    currency: string
}
export function CurrencyForm({
    currencies,
    amount,
    currency,
    changeHandler,
    changeCurrencyHandler,
}: CurrencyFormProps) {
    const exchange = (event: ChangeEvent<HTMLInputElement>) => {
        if (+event.target.value === 0) {
            changeHandler('0')
        } else {
            event.target.value = parseFloat(event.target.value).toString()
            changeHandler(event.target.value)
        }
    }

    const currencyHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        changeCurrencyHandler(event.target.value)
    }

    return (
        <div className={'h-64 flex flex-col  bg-gray-400 p-6 w-96 '}>
            <select
                className={'border-b-2 h-14 bg-gray-300 text-orange-600'}
                value={currency}
                onChange={currencyHandler}
            >
                {currencies.map((item) => {
                    return (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    )
                })}
            </select>
            <input
                className={
                    'border-orange-600 border-b-2 h-14 mt-7 bg-gray-400 text-white text-2xl text-center hover:border-orange-400'
                }
                type="number"
                value={amount}
                onChange={exchange}
            />
        </div>
    )
}
