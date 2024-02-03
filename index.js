//File Module:
const fs = require('fs/promises');
async function readFileAsync(filePath) {
  try {
    const content = await fs.readFile(filePath);
    return content;
  } catch (error) {
    return `Error reading file: ${error.message}`;
  }
}
async function writeFileAsync(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
    return 'File successfully written';
  } catch (error) {
    return `Error writing to file: ${error.message}`;
  }
}




async function processFiles() {
  try {
    const file1Content = await readFileAsync('file1.txt');
    const file2Content = await readFileAsync('file2.txt');

    const processedContent = `${new Date().toISOString()} - ${file1Content}\n${new Date().toISOString()} - ${file2Content}`;

    await writeFileAsync('outputFile1.txt', processedContent);
    await writeFileAsync('outputFile2.txt', processedContent);

    console.log('Files processed successfully');
  } catch (error) {
    console.error(`Error processing files: ${error.message}`);
  }
}
processFiles();
