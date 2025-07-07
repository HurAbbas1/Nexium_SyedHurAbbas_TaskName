'use client';

import * as React from 'react';
import { clsx } from 'clsx';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx('input input-bordered w-full', className)}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
