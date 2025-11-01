# Pandanda Rewritten Client

An Electron-based desktop client for Pandanda, featuring Flash plugin support for legacy game compatibility.

## Features

- **Cross-platform support**: Windows, macOS, and Linux
- **Flash plugin integration**: Built-in Pepper Flash support for Flash-based games
- **Secure environment**: Context isolation and security best practices
- **Lightweight**: Minimal dependencies, focused on performance

## Development

### Prerequisites
- Node.js 14+ and npm
- Git

### Setup
```bash
# Clone the repository
git clone https://github.com/pandandarewritten/pandanda-client.git
cd pandanda-client

# Install dependencies
npm install

# Start development server
npm start
```

### Building

Build for your current platform:
```bash
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux
```

Build for all platforms (requires appropriate build tools):
```bash
npm run build:all
```

### Project Structure
```
pandanda-client/
├── src/
│   └── main.js           # Electron main process
├── lib/
│   ├── icons/            # Application icons
│   ├── pepflashplayer.dll
│   ├── libpepflashplayer.so
│   └── PepperFlashPlayer.plugin
├── package.json          # Project metadata & build config
└── README.md             # This file
```

### Key Files

- **`src/main.js`** - Electron main process, handles window creation and Flash plugin loading
- **`package.json`** - Contains build configuration for electron-builder and project metadata
- **`lib/icons/`** - Application icons for all platforms

## Flash Plugin

The client includes Pepper Flash plugin support for playing Flash-based games:

- **Windows**: `pepflashplayer.dll`
- **macOS**: `PepperFlashPlayer.plugin`
- **Linux**: `libpepflashplayer.so`

Plugin paths are automatically resolved for both development and packaged environments.

## Configuration

### Build Configuration

Edit `package.json` to customize build settings:
- `productName` - Application name
- `appId` - Unique application identifier
- `copyright` - Copyright information
- Platform-specific settings under `build.win`, `build.mac`, `build.linux`

### Runtime Configuration

The main URL is configured in `src/main.js`:
```javascript
const mainURL = "https://localhost/play"
```

## Troubleshooting

### Flash Plugin Not Loading
1. Verify the plugin file exists in `lib/` directory
2. Check console output for plugin path messages
3. Ensure correct plugin for your platform is present

### Build Failures
1. Clear node_modules: `rm -rf node_modules && npm install`
2. Check Node.js version: `node --version` (should be 14+)
3. Review build logs for specific errors

### macOS Build Issues
- Ensure `lib/icons/icon.icns` exists (see `create-mac-icon.md`)
- May require code signing for distribution

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Reporting bugs
- Submitting feature requests
- Contributing code
- Development workflow

## License

This project is licensed under the Apache License 2.0 - see [LICENSE](LICENSE) file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/pandandarewritten/pandanda-client/issues)
- **Community**: Join our community channels

## Acknowledgments

- Built with [Electron](https://www.electronjs.org/)
- Packaged with [electron-builder](https://www.electron.build/)
- Add your own Icons and Assets to /lib/icons/
