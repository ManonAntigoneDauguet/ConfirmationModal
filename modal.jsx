import style from "./modale.module.css"
import closeIcon from "./Close.svg"


function Modal({ methodeOff }) {
    return (
        <div className={style.modalContainer}>
            <div id="confirmation" className={style.modal}>
                <span>Employee Created!</span>
                <div className={style.closeButtonContainer}>
                    <img src={closeIcon} alt="close" className={style.icon}/>
                    <input
                        type="button"
                        onClick={methodeOff}
                        className={style.closeButton}
                    />
                </div>
            </div>
        </div>
    )
}

module.exports = Modal