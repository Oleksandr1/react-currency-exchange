import React, {useContext} from 'react'
import './App.css'
import { Header } from './components/Header'
import { ExchangeForm } from './components/currency/ExchangeForm'
import { Footer } from './components/Footer'
import {ExchangeContext} from "./context/exchangeContext";
import {Spinner} from "./components/Spinner";
import {ErrorMessage} from "./components/ErrorMessage";


function App() {
    const { loading, error } = useContext(ExchangeContext)
    return (
        <>
            {loading &&
            <Spinner />
            }
            {error &&
                <ErrorMessage message={error}/>
            }
                <Header />
                <div
                    className={
                        'container bg-gray-200 mx-auto h-auto py-5 flex justify-center items-center'
                    }
                >
                    <ExchangeForm />
                </div>
                <Footer />

        </>
    )
}

export default App
