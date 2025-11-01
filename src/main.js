const { app, BrowserWindow, globalShortcut, session } = require('electron')
const path = require('path')
const { initializeUpdater, setupUpdateHandlers } = require('./updater')

if (require('electron-squirrel-startup')) 
{
	app.quit()
	return
}

const mainURL = "http://localhost/play"

let mainWindow= null;

// Fix plugin path for both development and packaged app
const getPluginPath = () => {
	const isDev = !app.isPackaged;
	
	if (isDev) {
		// Development environment
		switch (process.platform) {
			case 'win32':
				return path.join(__dirname, '../lib/pepflashplayer.dll');
			case 'darwin':
				return path.join(__dirname, '../lib/PepperFlashPlayer.plugin');
			case 'linux':
				return path.join(__dirname, '../lib/libpepflashplayer.so');
			default:
				return null;
		}
	} else {
		// Packaged environment - check if we're using electron-forge or electron-builder
		let pluginFile;
		switch (process.platform) {
			case 'win32':
				pluginFile = 'pepflashplayer.dll';
				break;
			case 'darwin':
				pluginFile = 'PepperFlashPlayer.plugin';
				break;
			case 'linux':
				pluginFile = 'libpepflashplayer.so';
				break;
			default:
				return null;
		}
		
		const forgePath = path.join(process.resourcesPath, 'app/lib', pluginFile);
		const builderPath = path.join(process.resourcesPath, 'lib', pluginFile);
		const appPath = path.join(process.resourcesPath, 'app', 'lib', pluginFile);
		
		// Try multiple paths
		const fs = require('fs');
		const pathsToTry = [forgePath, builderPath, appPath];
		
		for (const tryPath of pathsToTry) {
			if (fs.existsSync(tryPath)) {
				console.log('Found plugin at:', tryPath);
				return tryPath;
			}
		}
		
		// Fallback to relative path
		const fallbackPath = path.join(__dirname, '../lib', pluginFile);
		console.log('Plugin not found in standard paths, trying fallback:', fallbackPath);
		return fallbackPath;
	}
}

const pluginPaths = 
{
	win32: getPluginPath(),
	darwin: getPluginPath(),
	linux: getPluginPath(),
}

if (process.platform === 'linux') app.commandLine.appendSwitch('no-sandbox')
const pluginName = pluginPaths[process.platform]

console.log('Flash plugin path:', pluginName);

app.commandLine.appendSwitch('ppapi-flash-path', pluginName)
app.commandLine.appendSwitch('ppapi-flash-version', '31.0.0.122')
app.commandLine.appendSwitch('ignore-certificate-errors')

const createWindow = () => 
{
	mainWindow = new BrowserWindow({
		width: 1280,
		height: 720,
		autoHideMenuBar: true,
		useContentSize: true,
		webPreferences: 
		{
			devTools: true,
			plugins: true,
			contextIsolation: true,     // Add this for isolation
			enableRemoteModule: false,  // Add this line to disable
			nodeIntegration: false,      // Add this to disable Node access
			webSecurity: true,  // Add this for explicit security
			preload: path.join(__dirname, 'preload.js')  // Load preload script
		}
	})
	mainWindow.webContents.on('new-window', function(e, url) 
	{
		e.preventDefault();
		require('electron').shell.openExternal(url);
	});
	mainWindow.loadURL(mainURL)
}

app.on('ready', function () 
{
	
	globalShortcut.register('Control+Shift+I', () => {
        // When the user presses Ctrl + Shift + I, this function will get called
        // You can modify this function to do other things, but if you just want
        // to disable the shortcut, you can just return false
        return false;
    });
	
	// Initialize automatic updates and IPC handlers
	initializeUpdater();
	setupUpdateHandlers();
	
	createWindow()
})

app.on('window-all-closed', function() 
{
	//Make sure we get the most up-to-date game files on reset.
	session.defaultSession.clearCache();
	if (process.platform !== 'darwin') 
	{
		app.quit()
		process.exit(0)
	}
})
