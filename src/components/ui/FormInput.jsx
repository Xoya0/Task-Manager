import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import clsx from 'clsx';

const FormInput = ({
  label,
  type = 'text',
  icon: Icon,
  error,
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        )}
        <input
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          className={clsx(
            'block w-full rounded-lg border-gray-300 dark:border-gray-600',
            'focus:ring-primary-500 focus:border-primary-500',
            'dark:bg-gray-700 dark:text-white',
            'placeholder-gray-400 dark:placeholder-gray-400',
            'shadow-sm',
            Icon && 'pl-10',
            isPassword && 'pr-10',
            error && 'border-red-300 focus:ring-red-500 focus:border-red-500'
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" aria-hidden="true" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" aria-hidden="true" />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
};

export default FormInput; 