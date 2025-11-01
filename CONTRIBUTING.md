# Contributing to Pandanda Client

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

Be respectful and constructive in all interactions. We're building a welcoming community for everyone.

## Getting Started

### Prerequisites
- Node.js 14 or later
- npm or yarn
- Git
- Familiarity with Electron and JavaScript

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/pdr-client.git
   cd pdr-client
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/pandandarewritten/pdr-client.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Start development**:
   ```bash
   npm start
   ```

## Development Workflow

### Creating a Branch

Create a feature branch from `main`:
```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/` - New features
- `bugfix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring

### Making Changes

1. **Write clear, focused commits**:
   ```bash
   git commit -m "Brief description of changes"
   ```
2. **Keep commits atomic** - one logical change per commit
3. **Test your changes** locally before pushing
4. **Follow the existing code style** - consistent indentation and formatting

### Code Style Guidelines

- **Indentation**: Use tabs (as per existing code)
- **Naming**: Use camelCase for variables and functions
- **Comments**: Add comments for complex logic
- **Security**: Follow Electron security best practices
- **Performance**: Avoid unnecessary blocking operations

### Testing

Before submitting a pull request:

1. **Test on your platform**:
   ```bash
   npm start
   ```
2. **Build for your platform**:
   ```bash
   npm run build:win    # Windows
   npm run build:mac    # macOS
   npm run build:linux  # Linux
   ```
3. **Verify the built application works correctly**

## Submitting Changes

### Pull Request Process

1. **Update your branch** with latest upstream changes:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```
2. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
3. **Create a Pull Request** on GitHub with:
   - Clear title describing the change
   - Description of what was changed and why
   - Reference to any related issues (e.g., "Fixes #123")
   - Screenshots for UI changes

### PR Description Template

```markdown
## Description
Brief description of the changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested the changes.

## Checklist
- [ ] Code follows project style guidelines
- [ ] Changes tested locally
- [ ] Documentation updated (if needed)
- [ ] No new warnings generated
```

## Reporting Issues

### Bug Reports

Include:
- **Platform** (Windows/macOS/Linux version)
- **Steps to reproduce** the issue
- **Expected behavior**
- **Actual behavior**
- **Error messages** or logs
- **Screenshots** (if applicable)

### Feature Requests

Include:
- **Use case** - why this feature is needed
- **Proposed solution** - how it should work
- **Alternatives** - other approaches considered
- **Additional context** - any other relevant information

## Areas for Contribution

### High Priority
- Bug fixes and stability improvements
- Cross-platform compatibility fixes
- Performance optimizations
- Security improvements

### Documentation
- README improvements
- API documentation
- Build guides
- Troubleshooting guides

### Testing
- Test coverage improvements
- Platform-specific testing
- Edge case identification

## Project Structure

```
src/
  └── main.js          # Electron main process
lib/
  ├── icons/           # Application icons
  └── *.dll/.so/.plugin # Flash plugins
package.json           # Build and dependency config
```

## Key Technologies

- **Electron 11.x** - Desktop application framework
- **electron-builder** - Cross-platform packaging
- **Node.js** - Runtime environment

## Security Considerations

When contributing, keep security in mind:

- **No hardcoded credentials** - Use environment variables
- **Validate user input** - Prevent injection attacks
- **Use secure APIs** - Follow Electron security guidelines
- **Keep dependencies updated** - Report security issues privately
- **Context isolation** - Maintain process isolation

## Commit Message Guidelines

Write clear, descriptive commit messages:

```
[Type] Brief description

Longer explanation if needed. Explain what was changed and why.

Fixes #123
```

Types:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `refactor:` - Code refactoring
- `perf:` - Performance improvement
- `test:` - Test updates
- `chore:` - Build/tooling changes

## Questions?

- **GitHub Issues** - For bug reports and feature requests
- **Discussions** - For questions and general discussion
- **Email** - dev@pandandarewritten.com for security issues

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.

## Recognition

Contributors will be recognized in:
- Release notes
- Contributors list in README
- GitHub contributors page

Thank you for making Pandanda Rewritten Client better!
