import { useEffect, useState } from 'react'

export function useCountDown({
  targetDate,
  redeefDate,
}: {
  targetDate: Date
  redeefDate: Date
}) {
  const [timeLeft, setTimeLeft] = useState('')
  const [redeefMessage, setRedeefMessage] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()

      const difference = targetDate.getTime() - now.getTime()

      const differenceRedeef = redeefDate.getTime() - now.getTime()

      if (differenceRedeef <= 0) {
        setRedeefMessage('Redeef is here!')
      } else {
        setRedeefMessage('Redeef is coming soon!')
      }

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft('00:00:00:00:00')
      } else {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30))
        const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30)
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / (1000 * 60)) % 60)
        const seconds = Math.floor((difference / 1000) % 60)
        setTimeLeft(
          `${months.toString().padStart(2, '0')}:${days
            .toString()
            .padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
        )
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [redeefDate, targetDate])

  return { timeLeft, redeefMessage }
}
