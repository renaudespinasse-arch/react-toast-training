function Toast({ message, type, onClose }) {
  return (
    <div className={`toast ${type}`} role="status" aria-live="polite">
      <p>{message}</p>

      <button onClick={onClose}>Fermer</button>
    </div>
  );
}

export default Toast;
