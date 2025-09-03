const output = document.getElementById("output");

// Target info
const targetInfo = `
Number: 03009892735
Name: Momin Khan
Device: Infinix Note 12
----------------------------------------
Starting deep scan...
Connecting to hidden servers...
`;

output.textContent = targetInfo;

// Fake scan messages
const messages = [
  "Fetching photos...",
  "Analyzing device storage...",
  "Decrypting files...",
  "Checking WhatsApp backups...",
  "Scanning gallery...",
  "Searching hidden folders...",
  "Analyzing call logs...",
  "Bypassing security protocols...",
  "Cross-checking cloud drives...",
  "Running facial recognition...",
  "Fetching sensitive documents...",
  "Tracking IP address...",
  "Decrypting partitions...",
  "Cross-verifying backups...",
  "Analyzing social media data...",
  "Decrypting WhatsApp database...",
  "Checking SIM card data...",
  "Analyzing camera roll...",
  "Scanning for explicit content...",
  "Scanning complete in progress..."
];

let i = 0;
const intervalTime = (30 * 60 * 1000) / messages.length; // spread messages across 30 minutes

function showMessage() {
  if (i < messages.length) {
    output.textContent += "\n" + messages[i];
    i++;
    setTimeout(showMessage, intervalTime);
  } else {
    // Final Result
    output.textContent += `

----------------------------------------
SCAN COMPLETE
No sex photos or videos found.
No sensitive data available.
Report ID: #XC99273
----------------------------------------
    `;
  }
}

// Start scanning messages
setTimeout(showMessage, 2000);
