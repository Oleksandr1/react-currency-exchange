import { iRate } from '../models/iRate'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function UseRates() {
    const [rates, setRates] = useState<iRate[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchRates() {
        try {
            setLoading(true)
            setError('')
            const response = await axios.get(
                `https://cors-anywhere.herokuapp.com/https://api.privatbank.ua/p24api/exchange_rates?json&date=${getFormattedToday()}`,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET',
                    },
                }
            )

            if (response.status === 200) {
                setRates(response.data.exchangeRate)
            } else {
                setError('Wrong request')
            }
            setLoading(false)
        } catch (e: unknown) {
            const error = e as Error
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchRates().finally(() => console.log('loaded'))
    }, [])
    return { rates, loading, error }
}

function getFormattedToday() {
    return new Date(Date.now())
        .toLocaleString()
        .split(',')[0]
        .replaceAll('/', '.')
}
