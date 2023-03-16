import {useContext, useState} from 'react'
import { iRate } from '../models/iRate'
import Decimal from 'decimal.js'
import {ExchangeContext} from "../context/exchangeContext";

export function useExchange() {
    // const { rates, loading, error } = UseRates()
    const { rates } = useContext(ExchangeContext)
    const currencies = rates.map((c) => c.currency)

    const [convertFrom, setConvertFrom] = useState('0')
    const [convertTo, setConvertTo] = useState('0')

    const [currencyFrom, setCurrencyFrom] = useState('USD')
    const [currencyTo, setCurrencyTo] = useState('UAH')
    function changeToValue(value: string) {
        const newFrom = converting(rates, currencyFrom, currencyTo, value)
        setConvertFrom(newFrom)
        setConvertTo(value)
    }

    function changeFromValue(value: string) {
        const newTo = converting(rates, currencyTo, currencyFrom, value)
        setConvertTo(newTo)
        setConvertFrom(value)
    }

    const changeCurrencyTo = (value: string) => {
        setCurrencyTo(value)
        setConvertFrom(converting(rates, currencyFrom, value, convertTo))
    }
    const changeCurrencyFrom = (value: string) => {
        setCurrencyFrom(value)
        setConvertTo(converting(rates, currencyTo, value, convertFrom))
    }

    function converting(
        rates: iRate[],
        toCurrency: string,
        fromCurrency: string,
        amount: string
    ):string {
        const fromRate = rates.find((i: iRate) => i.currency === fromCurrency)
        const toRate = rates.find((i: iRate) => i.currency === toCurrency)
        if (fromRate && toRate) {
            return new Decimal(fromRate.saleRateNB)
                .mul(amount)
                .div(toRate.purchaseRateNB)
                .toFixed(2)
        }
        return '-1'
    }

    function change():void {
        let tmp = convertTo
        setConvertTo(convertFrom)
        setConvertFrom(tmp)

        tmp = currencyFrom
        setCurrencyFrom(currencyTo)
        setCurrencyTo(tmp)

        changeFromValue(tmp)
    }
    return {
        rates,
        currencies,
        currencyFrom,
        currencyTo,
        convertTo,
        convertFrom,
        changeFromValue,
        changeCurrencyFrom,
        change,
        changeToValue,
        changeCurrencyTo,
    }
}
