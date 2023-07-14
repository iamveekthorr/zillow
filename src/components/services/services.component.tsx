import { FC } from 'react';

import styles from './services.module.css';

import BuyAHome from '../../../public/buy-home-traced.svg';
import SellAHome from '../../../public/sale-traced.svg';
import RentAHome from '../../../public/house-traced.svg';
import Button from '../button/button.component';

const Services: FC = () => {
  return (
    <section className={styles.services_grid}>
      <div className={styles.services_grid__item}>
        <p className={styles.service_grid__item_card_heading}>what we offer</p>
        <p className={styles.service_grid__item_card_sub_heading}>
          looking for a house with a low price and quality ?. or do you want to
          sell your house quickly ?
        </p>
      </div>

      <div className={styles.services_grid__item}>
        <BuyAHome />
        <p className={styles.service_grid__item_card_heading}>buy a home</p>
        <p className={styles.service_grid__item_card_sub_heading}>
          Find your place with an immersive photo experience and the most
          listings, including things you won&apos;t find anywhere else.
        </p>
        <Button styles={styles.card_btn} text="get started" />
      </div>

      <div className={styles.services_grid__item}>
        <SellAHome />
        <p className={styles.service_grid__item_card_heading}>what we offer</p>
        <p className={styles.service_grid__item_card_sub_heading}>
          No matter what path you take to sell your home, we can help you
          navigate a successful sale.
        </p>
        <Button styles={styles.card_btn} text="get started" />
      </div>

      <div className={styles.services_grid__item}>
        <RentAHome />
        <p className={styles.service_grid__item_card_heading}>what we offer</p>
        <p className={styles.service_grid__item_card_sub_heading}>
          We&apos;re creating a seamless online experience &dash; from shopping
          on the largest rental network, to applying, to paying rent.
        </p>
        <Button styles={styles.card_btn} text="get started" />
      </div>
    </section>
  );
};

export default Services;
