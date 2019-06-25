import * as path from 'path';

import { runTests } from 'vscode-test';

async function main() {
	try {
		/**
		 * Download an archive build and unzip it
		 * Then replace this with absolute path to the executable
		 * - Win: Code - Insiders.exe
		 * - macOS: Visual Studio Code - Insiders.app/Contents/MacOS/Electron
		 * - Linux: VSCode-linux-x64/code-insiders
		 */
		const vscodeExecutablePath = '/Users/pine/Desktop/Visual Studio Code - Insiders.app/Contents/MacOS/Electron';

		// The folder containing the Extension Manifest package.json
		// Passed to `--extensionDevelopmentPath`
		const extensionDevelopmentPath = path.resolve(__dirname, '../../');

		// The path to the extension test script
		// Passed to --extensionTestsPath
		const extensionTestsPath = path.resolve(__dirname, './suite');

		// Download VS Code, unzip it and run the integration test
		await runTests({ vscodeExecutablePath, extensionDevelopmentPath, extensionTestsPath });
	} catch (err) {
		console.error('Failed to run tests');
		process.exit(1);
	}
}

main();
