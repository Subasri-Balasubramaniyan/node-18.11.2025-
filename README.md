# Simple File Manager CLI

A beginner-friendly Node.js command-line tool to manage files and folders.  
This tool allows you to list, create, read, and delete files or folders from your terminal.

---

## 🚀 Features

This CLI supports the following commands:

| Command | Description |
|---------|-------------|
| `ls`    | List all files and folders in the current directory |
| `mkdir <folder>` | Create a new folder |
| `touch <file>`   | Create a new empty file |
| `read <file>`    | Read and display file content |
| `rm <file/folder>` | Delete a file or folder |

---

## 🛠️ Usage

Run the script using Node.js:

```sh
node file-manager.js <command> <name>
Example commands:

sh
Copy code
node file-manager.js ls
node file-manager.js mkdir test
node file-manager.js touch hello.txt
node file-manager.js read hello.txt
node file-manager.js rm hello.txt
🧩 Setup
Install Node.js (https://nodejs.org/)

Clone or download this project

Open a terminal in the project folder

Run any command as shown above

🧪 Example
sh
Copy code
node file-manager.js mkdir notes
node file-manager.js touch notes/todo.txt
node file-manager.js read notes/todo.txt       # Outputs empty
node file-manager.js rm notes                  # Deletes 'notes' folder
📂 Project Structure
powershell
Copy code
📁 simple-file-manager-cli
 ├─ file-manager.js  # Main CLI script
 └─ package.json     # Project metadata
❗ Note
This tool is for learning purposes. It uses basic file operations and does not support advanced flags like recursive read or file copy.

📄 License
This project is open-source and free to use.

csharp
Copy code

---

## 📦 package.json

Create a new file named `package.json` with the following content:

```json
{
  "name": "simple-file-manager-cli",
  "version": "1.0.0",
  "description": "A basic CLI tool to manage files and folders using Node.js.",
  "main": "file-manager.js",
  "bin": {
    "fm": "./file-manager.js"
  },
  "scripts": {
    "start": "node file-manager.js"
  },
  "keywords": ["cli", "file-manager", "nodejs", "filesystem", "beginner"],
  "author": "Your Name",
  "license": "MIT"
}
