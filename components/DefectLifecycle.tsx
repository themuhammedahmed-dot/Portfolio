'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, AlertCircle, CheckCircle } from 'lucide-react';

interface DefectCase {
  id: string;
  name: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  stages: Array<{
    stage: 'reported' | 'verified' | 'resolved' | 'deployed';
    date: string;
    note: string;
  }>;
}

const defectCases: DefectCase[] = [
  {
    id: 'DEF-001',
    name: 'Login form accepts invalid email format',
    severity: 'critical',
    stages: [
      { stage: 'reported', date: 'Jan 15, 2025', note: 'Found during smoke testing' },
      { stage: 'verified', date: 'Jan 16, 2025', note: 'Reproduced on Firefox & Chrome' },
      { stage: 'resolved', date: 'Jan 18, 2025', note: 'Regex validation added' },
      { stage: 'deployed', date: 'Jan 20, 2025', note: 'Released in v2.1' },
    ],
  },
  {
    id: 'DEF-002',
    name: 'Dashboard charts misaligned on mobile',
    severity: 'high',
    stages: [
      { stage: 'reported', date: 'Jan 22, 2025', note: 'UAT feedback from stakeholder' },
      { stage: 'verified', date: 'Jan 23, 2025', note: 'Confirmed on iPhone 14 Pro' },
      { stage: 'resolved', date: 'Jan 25, 2025', note: 'CSS media query fix' },
      { stage: 'deployed', date: 'Jan 28, 2025', note: 'Released in v2.2' },
    ],
  },
];

const stageConfig = {
  reported: { icon: AlertCircle, color: 'text-pending-600', bg: 'bg-pending-50 dark:bg-pending-900/20' },
  verified: { icon: CheckCircle, color: 'text-accent-600', bg: 'bg-accent-50 dark:bg-accent-900/20' },
  resolved: { icon: CheckCircle, color: 'text-pass-600', bg: 'bg-pass-50 dark:bg-pass-900/20' },
  deployed: { icon: CheckCircle, color: 'text-pass-600', bg: 'bg-pass-50 dark:bg-pass-900/20' },
};

export function DefectLifecycle() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {defectCases.map((defect, idx) => {
        const isExpanded = expanded === defect.id;

        return (
          <motion.div
            key={defect.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden"
          >
            <button
              onClick={() => setExpanded(isExpanded ? null : defect.id)}
              className="w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3 text-left flex-1">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 min-w-20">{defect.id}</span>
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{defect.name}</span>
                <span
                  className={`px-2 py-1 text-xs font-mono rounded capitalize text-pending-700 dark:text-pending-300 bg-pending-50 dark:bg-pending-900/20`}
                >
                  {defect.severity}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50"
                >
                  <div className="p-4 space-y-3">
                    {defect.stages.map((stage, i) => {
                      const StageIcon = stageConfig[stage.stage].icon;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex gap-3"
                        >
                          <div className="flex flex-col items-center">
                            <StageIcon className={`w-5 h-5 ${stageConfig[stage.stage].color}`} />
                            {i < defect.stages.length - 1 && (
                              <div className="w-0.5 h-12 bg-slate-200 dark:bg-slate-700 my-1" />
                            )}
                          </div>
                          <div className="pb-4">
                            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">
                              {stage.stage}
                            </p>
                            <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-1">
                              {stage.date}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{stage.note}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
