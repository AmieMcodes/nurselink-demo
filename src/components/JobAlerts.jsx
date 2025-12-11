import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JobAlerts() {
  const [toast, setToast] = useState(false);

  const jobs = [
    { id: 1, title: "ICU Nurse", location: "Asunción Clinic" },
    { id: 2, title: "Pediatric Nurse", location: "Central Hospital" },
  ];

  // show a “new jobs” toast once when component mounts (for demo)
  useEffect(() => {
    setToast(true);
    const t = setTimeout(() => setToast(false), 2200);
    return () => clearTimeout(t);
  }, []);

  const handleApply = () => {
    setToast(true);
    setTimeout(() => setToast(false), 1800);
  };

  return (
    <div className="relative bg-white p-6 rounded-2xl shadow-subtle border border-bcbs-light transition hover:shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-bcbs-dark font-display">
        Job Alerts
      </h2>

      <ul className="space-y-3">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="border border-bcbs-light rounded-lg p-3 flex justify-between items-center bg-white hover:bg-bcbs-light/40 transition"
          >
            <div>
              <p className="font-medium text-gray-800">{job.title}</p>
              <p className="text-sm text-gray-500">{job.location}</p>
            </div>
            <button
              onClick={handleApply}
              className="bg-bcbs-blue text-white px-3 py-1 rounded-md font-medium hover:bg-bcbs-dark transition"
            >
              Apply with CV
            </button>
          </li>
        ))}
      </ul>

      <p className="text-gray-400 text-xs mt-3">
        * Tap “Apply with CV” to send your profile instantly.
      </p>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="absolute -top-3 right-4 bg-bcbs-dark text-white text-xs px-4 py-2 rounded-xl shadow-lg"
          >
            New job match available ✅
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

