import type {MainMenuItemProps} from '@/types';

import HarborLogo from '@/components/icons/harborLogo';
import MainMenuItem from '@/components/atoms/mainMenuItem';
import UserMenuItem from '@/components/atoms/userMenuItem';

import {LEFT_MENU_ITEMS, RIGHT_MENU_ITEMS} from './mainNav.contants';

import styles from './mainNav.module.scss';

export default function MainNav () {
  return <div className={styles.mainNavContainer}>
    <HarborLogo className={styles.brand}/>
    {
      LEFT_MENU_ITEMS.map((item: MainMenuItemProps) => {
        return <MainMenuItem {...item} />
      })
    }
    {
      RIGHT_MENU_ITEMS.map((item: MainMenuItemProps, index: number) => {
        return <MainMenuItem {...item} className={index === 0 && styles.rightSubMenu}/>
      })
    }
    <UserMenuItem />
  </div>
}