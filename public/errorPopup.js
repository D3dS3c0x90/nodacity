// Error Popup Component
function showError(message, duration = 3000) {
  // Remove existing popup if any
  const existing = document.getElementById('errorPopup');
  if (existing) existing.remove();

  // Create popup element
  const popup = document.createElement('div');
  popup.id = 'errorPopup';
  popup.className = 'error-popup';
  popup.innerHTML = `
    <span class="error-icon">⚠️</span>
    <span class="error-message">${message}</span>
    <button class="error-close" onclick="this.parentElement.remove()">&times;</button>
  `;

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .error-popup {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #dc3545;
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      gap: 10px;
      z-index: 9999;
      animation: slideIn 0.3s ease;
      max-width: 350px;
    }
    .error-popup .error-icon {
      font-size: 20px;
    }
    .error-popup .error-message {
      flex: 1;
      font-size: 14px;
    }
    .error-popup .error-close {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      padding: 0 5px;
    }
    .error-popup .error-close:hover {
      opacity: 0.8;
    }
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(popup);

  // Auto remove after duration
  if (duration > 0) {
    setTimeout(() => popup.remove(), duration);
  }
}

// Success Popup Component
function showSuccess(message, duration = 3000) {
  const existing = document.getElementById('successPopup');
  if (existing) existing.remove();

  const popup = document.createElement('div');
  popup.id = 'successPopup';
  popup.className = 'success-popup';
  popup.innerHTML = `
    <span class="success-icon">✅</span>
    <span class="success-message">${message}</span>
    <button class="success-close" onclick="this.parentElement.remove()">&times;</button>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .success-popup {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #28a745;
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      gap: 10px;
      z-index: 9999;
      animation: slideIn 0.3s ease;
      max-width: 350px;
    }
    .success-popup .success-icon {
      font-size: 20px;
    }
    .success-popup .success-message {
      flex: 1;
      font-size: 14px;
    }
    .success-popup .success-close {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      padding: 0 5px;
    }
    .success-popup .success-close:hover {
      opacity: 0.8;
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(popup);

  if (duration > 0) {
    setTimeout(() => popup.remove(), duration);
  }
}