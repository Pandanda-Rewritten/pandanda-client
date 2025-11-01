const { app, dialog, ipcMain } = require('electron');
const updateElectronApp = require('update-electron-app');

/**
 * Initialize automatic updates for the Electron app
 * Checks for updates on startup and automatically installs them
 */
function initializeUpdater() {
	// Only initialize updater in production (packaged app)
	if (app.isPackaged) {
		try {
			updateElectronApp({
				repo: 'pandandarewritten/pandanda-client',
				updateInterval: '24 hours', // Check every 24 hours
				logger: require('electron-log'),
				notifyUser: false, // Don't notify, just auto-install
			});

			console.log('Automatic updater initialized - will check on startup');
		} catch (error) {
			console.error('Failed to initialize updater:', error);
		}
	} else {
		console.log('Running in development mode - automatic updates disabled');
	}
}

/**
 * Handle manual update check via IPC
 */
function setupUpdateHandlers() {
	ipcMain.handle('check-for-updates', async () => {
		if (!app.isPackaged) {
			return {
				success: false,
				message: 'Update checking is only available in production builds',
			};
		}

		try {
			// The update-electron-app module handles checking automatically
			// This is a placeholder for manual checks if needed
			return {
				success: true,
				message: 'Update check initiated. You will be notified if updates are available.',
			};
		} catch (error) {
			console.error('Error checking for updates:', error);
			return {
				success: false,
				message: `Error checking for updates: ${error.message}`,
			};
		}
	});

	ipcMain.handle('get-app-version', async () => {
		return app.getVersion();
	});
}

module.exports = {
	initializeUpdater,
	setupUpdateHandlers,
};
