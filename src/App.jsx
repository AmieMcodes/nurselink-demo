import NurseProfile from "./components/NurseProfile";
import JobAlerts from "./components/JobAlerts";
import EmployerDashboard from "./components/EmployerDashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-bcbs-gray flex flex-col items-center p-8">
      <div className="w-full max-w-6xl space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-bcbs-dark font-display">
            NurseLink Prototype
          </h1>
          {/* gradient swoosh */}
          <div className="h-1 w-32 bg-gradient-to-r from-bcbs-dark via-bcbs-blue to-bcbs-light rounded-full" />
        </div>

        {/* Top grid: nurse + alerts */}
        <div className="grid gap-6 md:grid-cols-2">
          <NurseProfile />
          <JobAlerts />
        </div>

        {/* Employer section */}
        <EmployerDashboard />

        <p className="text-sm text-gray-400 text-center pt-6">
          Fast. Intuitive. Human-friendly.
        </p>
      </div>
    </div>
  );
}

