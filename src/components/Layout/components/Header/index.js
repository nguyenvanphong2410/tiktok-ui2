import classNames from "classnames/bind";
import styles from "./Header.module.scss"
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            {/* 1- Logo */}
            <div className={cx('logo')}>
                <img src={images.logo} alt="tiktoklogo" />
            </div>
            {/* 2- Search */}
            <div className={cx('search')}>
                <input
                    placeholder="Tìm kiếm tài khoản và video"
                    spellCheck={false}
                />

                <button type="" className={cx('clear')}>
                    {/* Clear */}
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>

                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                <button type="" className={cx('search-btn')}>
                    {/* Search */}
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            {/* 3- Action */}
            <div className={cx('action')}>
                {/*  */}
                <h4>action</h4>
            </div>
        </div>
    </header>
}

export default Header;