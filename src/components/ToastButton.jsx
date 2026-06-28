function ToastButton({ label, toastConfig, onShowToast }) {
  return <button onClick={() => onShowToast(toastConfig)}>{label}</button>;
}

export default ToastButton;
