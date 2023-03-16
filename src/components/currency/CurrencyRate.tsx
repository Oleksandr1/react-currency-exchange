interface iRateProps {
    title: string
    sale: number
    purchase: number
}
export function CurrencyRate({ title, sale, purchase }: iRateProps) {
    return (
        <div className="font-bold text-white mx-5 w-fit">
            {' '}
            {title}: {sale}/ {purchase}
        </div>
    )
}
