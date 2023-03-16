interface errorProps {
    message: string
}
export function ErrorMessage({ message }: errorProps) {
    return (
        <div
            className={
                'fixed bg-red-200 top-5 right-10  text-red-600 px-5 py-2 rounded'
            }
        >
            Something went wrong:
            <div>{message}</div>
        </div>
    )
}
