export default function EmployerDashboard() {
  const candidates = [
    { name: "María G.", skill: "ICU", exp: "4 yrs", location: "Asunción" },
    { name: "Carlos R.", skill: "Pediatrics", exp: "2 yrs", location: "Luque" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-subtle border border-bcbs-light transition hover:shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-bcbs-dark font-display">
        Employer Dashboard Preview
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          className="border border-bcbs-light rounded-lg p-2 flex-1 focus:ring-1 focus:ring-bcbs-blue outline-none"
          placeholder="Filter by skill"
        />
        <input
          className="border border-bcbs-light rounded-lg p-2 w-32 focus:ring-1 focus:ring-bcbs-blue outline-none"
          placeholder="Location"
        />
      </div>

      <div className="grid gap-3">
        {candidates.map((c, i) => (
          <div
            key={i}
            className="border border-bcbs-light rounded-lg p-3 bg-white hover:bg-bcbs-light/40 transition"
          >
            <p className="font-medium text-gray-800">{c.name}</p>
            <p className="text-sm text-gray-500">
              {c.skill} • {c.exp} • {c.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

