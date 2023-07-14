import React, { FC } from 'react';

const Button: FC<{
  text: string;
  disabled?: boolean;
  styles: string;
  btnType?: 'button' | 'submit' | 'reset' | undefined;
}> = ({ text, disabled, styles, btnType, ...otherProps }) => {
  return (
    <button
      disabled={disabled}
      className={styles}
      type={btnType ? btnType : 'button'}
      {...otherProps}
    >
      {text}
    </button>
  );
};

export default Button;
