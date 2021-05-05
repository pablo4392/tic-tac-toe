import "./Styles.css"

const ResetButton = ({handleReset}) => {
    return(
        <button className="reset" onClick={() => handleReset()}>
            RESET
        </button>
    )
}

export default ResetButton