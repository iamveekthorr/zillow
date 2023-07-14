import React, { FC } from 'react';
import Link from 'next/link';

import styles from './footer.module.css';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_container__text_group}>
        <p>
          Zillow Group is committed to ensuring digital accessibility for
          individuals with disabilities. We are continuously working to improve
          the accessibility of our web experience for everyone, and we welcome
          feedback and accommodation requests. If you wish to report an issue or
          seek an accommodation, please let us know.
        </p>

        <p>
          Zillow, Inc. holds real estate brokerage licenses in multiple states.
          Zillow (Canada), Inc. holds real estate brokerage licenses in multiple
          provinces.
        </p>

        <p>
          <Link href={'#'} style={{ display: 'block' }}>
            § 442-H New York Standard Operating Procedures§ New York Fair
            Housing Notice
          </Link>
          <Link href={'#'} style={{ display: 'block' }}>
            TREC: Information about brokerage services, Consumer protection
            notice
          </Link>
          <span style={{ display: 'block' }}>California DRE #1522444</span>
        </p>

        <p>California DRE #1522444 Contact Zillow, Inc. Brokerage</p>

        <p>
          For listings in Canada, the trademarks REALTOR&reg;, REALTORS&reg;,
          and the REALTOR&reg; logo are controlled by The Canadian Real Estate
          Association (CREA) and identify real estate professionals who are
          members of CREA. The trademarks MLS&reg;, Multiple Listing
          Service&reg; and the associated logos are owned by CREA and identify
          the quality of services provided by real estate professionals who are
          members of CREA. Used under license.
        </p>
      </div>
    </footer>
  );
};
