"use client"
import { Bus, LogOut, MapPin, Clock, Star } from "lucide-react"

export default function DriverRoutes() {
  const routes = [
    {
      id: 1,
      name: "Route A",
      path: "Downtown Terminal → University Campus → Shopping Mall → Business District",
      isRecommended: true,
      estimatedTime: "45 mins",
      stops: 4,
      status: "Active",
    },
    {
      id: 2,
      name: "Route B",
      path: "Airport → Train Station → City Center → Downtown Terminal",
      isRecommended: false,
      estimatedTime: "38 mins",
      stops: 4,
      status: "Available",
    },
    {
      id: 3,
      name: "Route C",
      path: "Residential Area A → Shopping Mall → University Campus → Residential Area B",
      isRecommended: false,
      estimatedTime: "52 mins",
      stops: 4,
      status: "Available",
    },
    {
      id: 4,
      name: "Express Route",
      path: "Airport → Business District → Downtown Terminal",
      isRecommended: false,
      estimatedTime: "25 mins",
      stops: 3,
      status: "Available",
    },
  ]

  const handleLogout = () => {
    // Handle logout logic
    window.location.href = "/"
  }

  const handleSelectRoute = (routeId) => {
    console.log("Selected route:", routeId)
    // Handle route selection logic
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Bus className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">Smart Bus Routing</h1>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Routes</h2>
          <p className="text-gray-600">Select a route to start your journey</p>
        </div>

        {/* Routes Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {routes.map((route) => (
            <div
              key={route.id}
              className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-200 hover:shadow-xl ${
                route.isRecommended
                  ? "ring-2 ring-green-500 bg-gradient-to-br from-green-50 to-white"
                  : "hover:scale-105"
              }`}
            >
              {/* Route Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-bold text-gray-900">{route.name}</h3>
                  {route.isRecommended && (
                    <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Recommended</span>
                    </div>
                  )}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    route.status === "Active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {route.status}
                </span>
              </div>

              {/* Route Path */}
              <div className="mb-4">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{route.path}</p>
                </div>
              </div>

              {/* Route Details */}
              <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{route.estimatedTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bus className="h-4 w-4" />
                    <span>{route.stops} stops</span>
                  </div>
                </div>
              </div>

              {/* Select Button */}
              <button
                onClick={() => handleSelectRoute(route.id)}
                className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  route.isRecommended
                    ? "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500"
                    : "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500"
                }`}
              >
                {route.status === "Active" ? "Continue Route" : "Start Route"}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Driver Information</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">4</div>
              <div className="text-gray-600">Available Routes</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">1</div>
              <div className="text-gray-600">Recommended</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">160</div>
              <div className="text-gray-600">Total Minutes</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
