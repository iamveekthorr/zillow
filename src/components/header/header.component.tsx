'use client';
import React, { FC, useRef } from 'react';

// Hooks
import useMediaQuery from '@/hooks/useMediaQuery.hook';
import useToggle from '@/hooks/useToggle.hook';
import useClickOutside from '@/hooks/useClickOutside.hook';

import ShowView from '@/components/show-view/show-view.component';

import IconUser from '../../../public/user.svg';

// Static imports
import Logo from '../../../public/z-logo.svg';
import styles from './header.module.css';

export const Header: FC = () => {
  const [match, isComponentMounted] = useMediaQuery('(min-width: 70rem)');

  const [isOpen, open] = useToggle();

  const ref = useRef(null);

  useClickOutside(ref, open);

  return (
    <header className={styles.styledHeaderContainer}>
      <div className={styles.hamburger_menu_icon_container} onClick={open}>
        <div
          className={`${styles['hamburger_menu_icon']} ${
            isOpen && styles.hamburger_menu_icon__open
          }`}
        >
          <span />
        </div>
      </div>
      <ShowView when={isOpen}>
        <div
          ref={ref}
          className={`${styles.mobile_drop_downBG}
          ${isOpen && styles.mobile_drop_downBG__open}`}
        >
          <ul>
            <li>buy</li>
            <li>sell</li>
            <li>rent</li>
            <li>agent finder</li>
          </ul>
        </div>
      </ShowView>

      <Logo className={styles.logo} />

      <ShowView when={isComponentMounted && match}>
        <ul className={styles.styledMenuContainer}>
          <li>buy</li>
          <li>sell</li>
          <li>rent</li>
          <li>agent finder</li>
          <li>home loans</li>
          <li>manage rentals</li>
        </ul>
      </ShowView>
      <div className={styles.styledIconUserBg}>
        <IconUser />
      </div>
    </header>
  );
};
