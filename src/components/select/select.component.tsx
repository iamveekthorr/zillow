import { useRef } from 'react';

import useToggle from '@/hooks/useToggle.hook';
import useClickOutside from '@/hooks/useClickOutside.hook';

import Arrow from '../../../public/arrow-down.svg';

import styles from './select.module.css';
import ShowView from '../show-view/show-view.component';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const [isOpen, open] = useToggle(false);

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => isOpen && open());

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    open();
  };

  return (
    <section className={styles.select_container} ref={ref}>
      <div className={`${styles.select}`} onClick={open}>
        <div className={styles.selected_option}>{value}</div>
        <Arrow className={styles.arrow} />
      </div>
      <ShowView when={isOpen}>
        <ul className={styles.options}>
          {options.map((option) => (
            <li
              key={option.label}
              onClick={() => handleOptionClick(option.label)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </ShowView>
    </section>
  );
};

export default Select;
