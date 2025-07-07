'use client';

import * as React from 'react';
import { clsx } from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx('btn btn-primary', className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
