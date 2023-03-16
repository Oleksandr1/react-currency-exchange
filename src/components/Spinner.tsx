export function Spinner() {
    return (
        <div
            className={
                'fixed bg-black/80 top-0 right-0 left-0 bottom-0 flex items-center justify-center'
            }
        >
            <div className="w-40 h-40  border-b-4 border-orange-600 rounded-full animate-spin"></div>
        </div>
    )
}
