import { useState, useRef } from "react";
import Toast from "./components/Toast.jsx";
import ToastButton from "./components/ToastButton.jsx";
import "./App.css";

const toastButtons = [
  {
    id: "success",
    label: "Succès",
    message: "Sauvegardé",
    type: "success",
    duration: 3000,
  },
  {
    id: "error",
    label: "Erreur",
    message: "Erreur réseau",
    type: "error",
    duration: 5000,
  },
  {
    id: "warning",
    label: "Attention",
    message: "Attention, vérifie les champs",
    type: "warning",
    duration: 4000,
  },
  {
    id: "info",
    label: "Information",
    message: "Information importante",
    type: "info",
    duration: 3000,
  },
];

function App() {
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });

  const toastTimeoutRef = useRef(null);

  function closeToast() {
    setToast((currentToast) => ({
      ...currentToast,
      isVisible: false,
    }));
  }

  function showToast(message, type, duration) {
    setToast({
      isVisible: true,
      message,
      type,
    });

    clearTimeout(toastTimeoutRef.current);

    toastTimeoutRef.current = setTimeout(() => {
      closeToast();
    }, duration);
  }

  function hideToast() {
    closeToast();

    clearTimeout(toastTimeoutRef.current);
  }

  return (
    <div>
      {toastButtons.map((toastButton) => (
        <ToastButton
          key={toastButton.id}
          label={toastButton.label}
          message={toastButton.message}
          type={toastButton.type}
          duration={toastButton.duration}
          onShowToast={showToast}
        />
      ))}
      {toast.isVisible && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
    </div>
  );
}

export default App;
