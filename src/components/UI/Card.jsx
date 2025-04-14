import { ReactNode } from 'react';

export function Card({ children, title }) {
  return (
    <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm p-6 dark:text-dark-primary" >
      {title && (
        <h3 className="text-lg font-semibold mb-4 dark:text-dark-primary">{title}</h3>
      )}
      {children}
    </div>
  );
}