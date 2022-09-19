import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import * as searchServices from '../../../services/searchService';
import AccountItem from '../../../components/AccountItem';
import { SearchIcon } from '../../../components/Icons';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '../../../hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchAccount, setSearchAccount] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResut, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchAccount([]);
            return;
        }

        // fetch(
        //     `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        //         debounced
        //     )}&type=less`
        // )
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearchAccount(res.data);
        //         setLoading(false);
        //     });

        const fetchAPI = async () => {
            setLoading(true);
            const result = await searchServices.search(debounced);
            setSearchAccount(result);
            setLoading(false);
        };
        fetchAPI();
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleSubmit = (e) => {
        const searchValue = e.target.value;

        if (searchValue.startsWith(' ')) {
            return;
        }

        setSearchValue(searchValue);
    };

    return (
       // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context. 
        <div>
            <HeadlessTippy
                visible={showResut && searchAccount.length > 0}
                interactive={true}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchAccount.map((account) => (
                                <AccountItem key={account.id} data={account} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        type="text"
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleSubmit}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                    )}
    
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
