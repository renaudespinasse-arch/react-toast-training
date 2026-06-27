function ToastButton({ label, message, type, duration, onShowToast }) {
  return (
    <button
      onClick={() =>
        onShowToast({
          message,
          type,
          duration,
        })
      }
    >
      {label}
    </button>
  );
}

export default ToastButton;
