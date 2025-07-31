'use client'
import { useCountDown } from '@/hooks/countdown.hook'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const inputDate = useRef<HTMLInputElement>(null)
  const [showDialog, setShowDialog] = useState(false)
  const [targetDate, setTargetDate] = useState<Date | null>(null)

  // On mount, check localStorage for target date
  useEffect(() => {
    const stored = localStorage.getItem('targetDate')
    if (stored) {
      setTargetDate(new Date(stored))
    } else {
      setShowDialog(true)
    }
  }, [])

  // Save to localStorage when targetDate changes
  useEffect(() => {
    if (targetDate) {
      localStorage.setItem('targetDate', targetDate.toISOString())
    }
  }, [targetDate])

  const { timeLeft } = useCountDown({
    targetDate: targetDate || new Date(2026, 1, 16),
  })

  // Handler for dialog submit
  const handleDialogSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputDate.current?.value) {
      setTargetDate(new Date(inputDate.current.value))
      setShowDialog(false)
    }
  }

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
      {/* Dialog for first visit */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <form
            onSubmit={handleDialogSubmit}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4 min-w-[300px]"
          >
            <h2 className="text-lg font-semibold">
              Welcome! Choose your enlistment date:
            </h2>
            <input
              ref={inputDate}
              type="date"
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-200"
              defaultValue={new Date(2026, 1, 16).toISOString().split('T')[0]}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Save
            </button>
          </form>
        </div>
      )}

      <div className="text-center space-y-4 sm:space-y-6 max-w-screen md:max-w-4xl w-full px-4">
        <div className="flex flex-col items-center space-y-2">
          <label htmlFor="date" className="text-sm font-medium text-gray-700">
            Select Your Enlistment Date.
          </label>
          <div className="relative">
            <input
              defaultValue={
                (targetDate || new Date(2026, 1, 16))
                  .toISOString()
                  .split('T')[0]
              }
              ref={inputDate}
              type="date"
              id="date"
              className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent transition-all duration-200 hover:border-gray-400 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-clear-button]:hidden [&::-webkit-outer-spin-button]:hidden cursor-pointer"
              onClick={(e) => {
                e.currentTarget.showPicker()
              }}
              onChange={(e) => {
                setTargetDate(new Date(e.target.value))
              }}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          Military Service Countdown.
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500"></div>
            <span className="text-[10px] sm:text-xs text-gray-600">
              {'>'} 7 months
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500"></div>
            <span className="text-[10px] sm:text-xs text-gray-600">
              5-7 months
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500"></div>
            <span className="text-[10px] sm:text-xs text-gray-600">
              3-5 months
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"></div>
            <span className="text-[10px] sm:text-xs text-gray-600">
              ≤ 3 months
            </span>
          </div>
        </div>

        {timeLeft && (
          <div className="flex flex-col items-center space-y-2">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
              {timeLeft.split(':').map((unit, index) => {
                const totalMonths = parseInt(timeLeft.split(':')[0])
                let colorClass = ''

                if (totalMonths > 7) {
                  colorClass = 'text-red-500'
                } else if (totalMonths > 5) {
                  colorClass = 'text-orange-500'
                } else if (totalMonths > 3) {
                  colorClass = 'text-yellow-500'
                } else {
                  colorClass = 'text-green-500'
                }

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center px-1 sm:px-2"
                  >
                    <span
                      className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold ${colorClass}`}
                    >
                      {unit}
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">
                      {['Month', 'Day', 'Hour', 'Minute', 'Second'][index]}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {!timeLeft && (
          <div className="inline-block px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-gradient-to-r from-white to-gray-50 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/20 backdrop-blur-sm">
            <p className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold">
              Loading...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
