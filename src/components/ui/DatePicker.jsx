import { forwardRef } from 'react';
import { Calendar } from 'lucide-react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button
    type="button"
    onClick={onClick}
    ref={ref}
    className="w-full flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-left text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
  >
    <Calendar className="w-5 h-5 mr-2 text-gray-400" />
    {value || 'Select date'}
  </button>
));

CustomInput.displayName = 'CustomInput';

const DatePicker = ({ selected, onChange, ...props }) => {
  return (
    <ReactDatePicker
      selected={selected}
      onChange={onChange}
      customInput={<CustomInput />}
      dateFormat="MMM d, yyyy"
      {...props}
    />
  );
};

export default DatePicker; 