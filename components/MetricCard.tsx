'use client';

import { motion } from 'framer-motion';

interface MetricCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

export function MetricCard({ value, label, icon, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-accent-500 dark:hover:border-accent-500 transition-all hover:shadow-lg"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl font-bold text-pass-600 dark:text-pass-500">{value}</span>
        <span className="text-slate-400 dark:text-slate-500">{icon}</span>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">{label}</p>
    </motion.div>
  );
}
