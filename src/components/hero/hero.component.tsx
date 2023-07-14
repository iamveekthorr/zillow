'use client';

import Image from 'next/image';
import { FC, useState } from 'react';

import Button from '@/components/button/button.component';
import Select from '@/components/select/select.component';

import styles from './hero.module.css';

import HeroImage from '../../../public/todd-kent-178j8tJrNlc-unsplash 1.png';

export const HeroSection: FC = () => {
  const [selectedLocationOption, setSelectedLocationOption] =
    useState<string>('choice location');

  const [selectedBedRoomOption, setSelectedBedRoomOption] =
    useState<string>('bedrooms');

  const [selectedOption, setSelectedOption] = useState<string>('rent');

  const handleLocationChange = (value: string) =>
    setSelectedLocationOption(value);

  const handleBedRoomChange = (value: string) =>
    setSelectedBedRoomOption(value);

  const handleChange = (value: string) => setSelectedOption(value);

  return (
    <section className={styles.hero_section}>
      <div
        className={`${styles.display_flex_util} ${styles.align_items_center_util} ${styles.justify_content_center_util} ${styles.padding_gen_sm_1} ${styles.display_block_sm_screen} `}
      >
        <div
          className={`${styles.margin_right_auto_util} ${styles.display_block_sm_screen} ${styles.margin_bottom_rsp}`}
        >
          <div className={`${styles.padding_right_sm_1}`}>
            <h1 className={styles.hero_text_container}>
              <p>
                <span>agents.</span>
                <span>tours.</span>
              </p>
              <p>
                <span>loans.</span>
                <span>homes.</span>
              </p>
            </h1>

            <div
              className={`${styles.display_flex_util}  ${styles.hero_text__sub_heading_container}`}
            >
              <p className={styles.hero_text__sub_heading}>
                looking for a house with a low price and quality ?. or do you
                want to sell your house quickly ?
              </p>
              <Button styles={styles.hero_cta_button} text="get started" />
            </div>
          </div>
        </div>
        <Image
          width={'500'}
          height={'500'}
          alt="A white house with trees around it"
          src={HeroImage}
        />
      </div>
      <section className={`${styles.hero_section__searchBG}`}>
        <Select
          options={[
            { value: 'test', label: 'man' },
            { value: 'tester', label: 'woman' },
          ]}
          value={selectedLocationOption}
          onChange={handleLocationChange}
        />

        <Select
          options={[
            { value: 'test', label: 'man' },
            { value: 'tester', label: 'woman' },
          ]}
          value={selectedBedRoomOption}
          onChange={handleBedRoomChange}
        />

        <Select
          options={[
            { value: 'test', label: 'man' },
            { value: 'tester', label: 'woman' },
          ]}
          value={selectedOption}
          onChange={handleChange}
        />
        <Button
          text="search"
          styles={`${styles.hero_cta_button} ${styles.clear_margin}`}
        />
      </section>
    </section>
  );
};
