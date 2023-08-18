import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1692460800&x-signature=i%2F0CZbgy1bvEfoFdpgDu%2BkfQat4%3D"
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