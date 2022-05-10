import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://icdn.dantri.com.vn/thumb_w/640/2019/11/02/nhung-hot-girl-noi-bat-thang-10-docx-1572697558949.jpeg" alt="hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>NguyenVanA</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
