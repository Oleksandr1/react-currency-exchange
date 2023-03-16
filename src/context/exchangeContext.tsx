import { createContext, ReactNode } from 'react'

import { iRate } from '../models/iRate'
import { UseRates } from '../hooks/useFetch'

const defaultContext = {
    rates: [] as iRate[],
    loading: false,
    error: ''
}
export const ExchangeContext = createContext(defaultContext)

export const ExchangeState = ({ children }: { children: ReactNode }) => {
    const { rates, loading, error } = UseRates()

    return (
        <ExchangeContext.Provider value={{ rates, loading, error}}>
            {children}
        </ExchangeContext.Provider>
    )
}
