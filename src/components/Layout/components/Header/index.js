import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            {/*==========Logo==========*/}
            <div className={cx('logo')}>
                <img src={images.logo} alt='tiktok' />
            </div>

            {/*Search*/}

            <div className={cx('search')}>
                <input placeholder='Search accounts and videos' spellCheck="false"></input>
                <button className={cx('clear')}>{/* Clear*/}
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>   {/*Loading*/}
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={cx('actions')}></div>

        </div>
    </header >;
}

export default Header;