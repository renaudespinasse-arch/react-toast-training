import { useEffect, useRef, useState } from "react";

function useToast() {
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

  useEffect(() => {
    return () => {
      clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  return {
    toast,
    showToast,
    hideToast,
  };
}

export default useToast;
