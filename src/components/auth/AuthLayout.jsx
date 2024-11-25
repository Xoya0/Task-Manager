import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo/Brand */}
          <Link to="/" className="flex justify-center mb-8">
            <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              TaskManager
            </span>
          </Link>

          {/* Auth Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {subtitle}
                </p>
              )}
            </div>
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout; 