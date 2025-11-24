import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log('Main.tsx loading - Environment:', (import.meta as any).env.MODE);
console.log('Base URL:', (import.meta as any).env.BASE_URL);

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('PWA: Service Worker registered', registration);
      })
      .catch((error) => {
        console.log('PWA: Service Worker registration failed', error);
      });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
