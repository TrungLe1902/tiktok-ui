import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d1a8b7672366f2ee6b2ca71fdae520cc.jpeg?x-expires=1692720000&x-signature=%2FzlRPugklWsu3Au47FSPT%2BcYRmU%3D"
                alt="Hoaa" />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Le Duc Trung</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </h4>
                <span className={cx("username")}>Trung le Duc</span>
            </div>

        </div>
    );
}

export default AccountItem;