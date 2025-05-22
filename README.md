# 🎯 Military Service Countdown

A sleek, responsive countdown timer built with Next.js and Tailwind CSS to track the remaining time until military service completion. This project features a modern UI with dynamic color coding based on the remaining time.

![Military Service Countdown Preview](public/website.png)

## ✨ Features

- **Real-time Countdown**: Precise countdown to the second with millisecond precision
- **Dynamic Color Coding**: Visual status indicators based on remaining time
  - 🔴 Red: > 7 months remaining
  - 🟠 Orange: 5-7 months remaining
  - 🟡 Yellow: 3-5 months remaining
  - 🟢 Green: ≤ 3 months remaining
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Animations**: Fluid updates and transitions
- **Special Event Tracking**: Countdown to significant milestones

## 🛠️ Built With

- [Next.js 14](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety and better developer experience
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - Custom hooks for state management

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/military-service-countdown.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

The countdown can be easily customized by modifying the target dates in `app/page.tsx`:

```typescript
const { timeLeft, redeefMessage } = useCountDown({
  targetDate: new Date(2026, 1, 15), // Your target date
  redeefDate: new Date(2025, 9, 1), // Your milestone date
})
```

## 📱 Responsive Design

The application is fully responsive and optimized for:

- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktop screens

## 🔧 Technical Implementation

- Custom React hook for countdown logic
- Efficient state management
- Optimized performance with minimal re-renders
- Clean and maintainable code structure

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Saif Mohamed**

- GitHub: [@saifmohamedsv](https://github.com/saifmohamedsv)
- LinkedIn: [Your LinkedIn Profile]

---

⭐️ Star this project if you find it useful!
