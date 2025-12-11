import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NurseProfile() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-subtle border border-bcbs-light">
      <h2 className="text-xl font-semibold mb-4 text-bcbs-dark font-display">
        Nurse Profile Setup
      </h2>

      <div className="space-y-3">
        <input
          className="w-full border border-bcbs-light rounded-lg p-2 focus:ring-1 focus:ring-bcbs-blue outline-none font-sans"
          placeholder="Full name"
        />
        <input
          className="w-full border border-bcbs-light rounded-lg p-2 focus:ring-1 focus:ring-bcbs-blue outline-none font-sans"
          placeholder="License number"
        />
        <input
          className="w-full border border-bcbs-light rounded-lg p-2 focus:ring-1 focus:ring-bcbs-blue outline-none font-sans"
          placeholder="Skills (e.g. ICU, Pediatrics)"
        />
        <input
          type="file"
          className="w-full border border-bcbs-light rounded-lg p-2 text-sm text-gray-600 font-sans"
        />

        <button
          onClick={handleSave}
          className="w-full bg-bcbs-blue text-white rounded-lg p-2 mt-3 font-medium hover:bg-bcbs-dark transition"
        >
          Save Profile
        </button>
      </div>

      <AnimatePresence>
        {saved && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-4 bg-bcbs-light text-bcbs-dark py-2 rounded-md text-center font-medium shadow-subtle"
          >
            ✓ Profile saved successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

