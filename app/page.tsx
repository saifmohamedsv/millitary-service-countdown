'use client'
import { useCountDown } from '@/hooks/countdown.hook'

export default function Home() {
  const { timeLeft, redeefMessage } = useCountDown({
    targetDate: new Date(2026, 2, 1),
    redeefDate: new Date(2025, 9, 1),
  })

  if (!timeLeft || timeLeft.startsWith('00')) return
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="text-center space-y-8 sm:space-y-12 max-w-screen md:max-w-4xl w-full px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-8">
          To return a normal person...
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
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
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/20 backdrop-blur-sm"
              >
                <div
                  className={`text-3xl  md:text-6xl font-bold ${colorClass} mb-1 sm:mb-2`}
                >
                  {unit}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-500 uppercase tracking-wider font-medium">
                  {['Month', 'Day', 'Hour', 'Minute', 'Second'][index]}
                </div>
              </div>
            )
          })}
        </div>

        <div className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-white to-gray-50 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/20 backdrop-blur-sm">
          <p className="text-sm sm:text-lg text-gray-900 font-semibold">
            {redeefMessage}
          </p>
        </div>
      </div>
    </div>
  )
}
