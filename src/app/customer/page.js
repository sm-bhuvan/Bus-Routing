"use client"

import Link from "next/link"
import { useState } from "react"
import { MapPin, Search, ArrowLeft, Bus, Clock, Users } from "lucide-react"

export default function CustomerPage() {
  const [startingPoint, setStartingPoint] = useState("")
  const [destination, setDestination] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const locations = [
    "Downtown Terminal",
    "University Campus",
    "Shopping Mall",
    "Airport",
    "Train Station",
    "Business District",
    "Residential Area A",
    "Residential Area B",
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (!startingPoint || !destination) return

    setIsSearching(true)

    // Simulate API call
    setTimeout(() => {
      const mockResults = [
        {
          id: 1,
          route: `${startingPoint} → City Center → ${destination}`,
          duration: "25 mins",
          stops: 3,
          nextBus: "5 mins",
          fare: "$2.50",
        },
        {
          id: 2,
          route: `${startingPoint} → Express → ${destination}`,
          duration: "18 mins",
          stops: 1,
          nextBus: "12 mins",
          fare: "$3.00",
        },
        {
          id: 3,
          route: `${startingPoint} → Local Route → ${destination}`,
          duration: "35 mins",
          stops: 8,
          nextBus: "8 mins",
          fare: "$2.00",
        },
      ]
      setSearchResults(mockResults)
      setIsSearching(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Bus className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Smart Bus Routing</h1>
            </div>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Your Route</h2>
          <p className="text-gray-600">Search for the best bus routes to your destination</p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Starting Point */}
              <div>
                <label htmlFor="starting-point" className="block text-sm font-medium text-gray-700 mb-2">
                  Starting Point
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="starting-point"
                    value={startingPoint}
                    onChange={(e) => setStartingPoint(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select starting point</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Destination */}
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                  Destination
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select destination</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              disabled={isSearching || !startingPoint || !destination}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>{isSearching ? "Searching..." : "Search Buses"}</span>
            </button>
          </form>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Available Routes</h3>
            {searchResults.map((result) => (
              <div
                key={result.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{result.route}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{result.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{result.stops} stops</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bus className="h-4 w-4" />
                        <span>Next: {result.nextBus}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 text-right">
                    <div className="text-2xl font-bold text-blue-600">{result.fare}</div>
                    <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                      Select Route
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
