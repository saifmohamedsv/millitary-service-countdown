'use client'
import { useCountDown } from '@/hooks/countdown.hook'

export default function Home() {
  const { timeLeft, redeefMessage } = useCountDown({
    targetDate: new Date(2026, 1, 20),
    redeefDate: new Date(2025, 9, 1),
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="text-center space-y-8 sm:space-y-12 max-w-screen md:max-w-4xl w-full px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-8">
          Military Service Countdown for{' '}
          <span className="text-red-500 bg-red-50 px-3 py-1 rounded-lg border border-red-100 shadow-sm">
            01/03
          </span>{' '}
          patch.
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-2">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <span className="text-xs sm:text-sm text-gray-600">
              {'>'} 7 months
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-orange-500"></div>
            <span className="text-xs sm:text-sm text-gray-600">5-7 months</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <span className="text-xs sm:text-sm text-gray-600">3-5 months</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            <span className="text-xs sm:text-sm text-gray-600">≤ 3 months</span>
          </div>
        </div>

        {timeLeft && (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6">
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
                  <div key={index} className="flex flex-col items-center">
                    <span
                      className={`text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold ${colorClass}`}
                    >
                      {unit}
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">
                      {
                        [
                          'Month',
                          'Day',
                          'Hour',
                          'Minute',
                          'Second',
                          'Millisecond',
                        ][index]
                      }
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {redeefMessage && (
          <div className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-white to-gray-50 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/20 backdrop-blur-sm">
            <p className="text-sm sm:text-lg text-gray-900 font-semibold">
              {redeefMessage}
            </p>
          </div>
        )}

        {(!redeefMessage || !timeLeft) && (
          <div className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-white to-gray-50 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/20 backdrop-blur-sm">
            <p className="text-sm sm:text-lg text-gray-900 font-semibold">
              Loading...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
