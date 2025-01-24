export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">
            2D Calculator
          </h2>
          <p className="text-gray-300">
            Graph equations and explore 2D mathematics
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">
            3D Calculator
          </h2>
          <p className="text-gray-300">Visualize and manipulate 3D shapes</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">
            Drawing Tool
          </h2>
          <p className="text-gray-300">
            Create geometric shapes using text commands
          </p>
        </div>
      </div>
    </div>
  );
}
