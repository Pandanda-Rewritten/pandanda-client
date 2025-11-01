const { contextBridge, ipcRenderer } = require('electron');

/**
 * Expose safe IPC methods to the renderer process
 * This maintains security by only exposing specific methods
 */
contextBridge.exposeInMainWorld('electronAPI', {
	// Update-related APIs
	checkForUpdates: () => ipcRenderer.invoke('check-for-updates'),
	getAppVersion: () => ipcRenderer.invoke('get-app-version'),

	// Listen for update events
	onUpdateAvailable: (callback) => ipcRenderer.on('update-available', callback),
	onUpdateDownloaded: (callback) => ipcRenderer.on('update-downloaded', callback),
	onUpdateError: (callback) => ipcRenderer.on('update-error', callback),

	// Remove listeners
	removeUpdateAvailableListener: () => ipcRenderer.removeAllListeners('update-available'),
	removeUpdateDownloadedListener: () => ipcRenderer.removeAllListeners('update-downloaded'),
	removeUpdateErrorListener: () => ipcRenderer.removeAllListeners('update-error'),
});
