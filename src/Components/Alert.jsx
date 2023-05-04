export const Alert = ( { menssage, bgColor } ) => {
    return (
        <div className={`alert alert-${bgColor} mt-3`} role="alert">
            {menssage}
        </div>
    )
}
