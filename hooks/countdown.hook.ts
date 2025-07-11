import { useEffect, useState } from 'react'

export function useCountDown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft('00:00:00:00:00:00')
      } else {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30))
        const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30)
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / (1000 * 60)) % 60)
        const seconds = Math.floor((difference / 1000) % 60)
        // const milliseconds = Math.floor((difference / 10) % 100)
        setTimeLeft(
          `${months.toString().padStart(2, '0')}:${days
            .toString()
            .padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`,
        )
      }
    }, 10)

    return () => clearInterval(interval)
  }, [targetDate])

  return { timeLeft }
}
