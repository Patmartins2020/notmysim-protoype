const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (like HTML, CSS, JS)
app.use(express.static(__dirname));

// Send start.html as default page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`NotMySim dashboard running at http://localhost:${PORT}`);
});
