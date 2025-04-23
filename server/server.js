const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

const buildPath = path.resolve(__dirname, '../webapp/build');

// Проверяем, существует ли папка build
if (!fs.existsSync(buildPath)) {
  console.error('❌ Build папка не найдена. Сначала запусти "npm run build" в webapp/');
  process.exit(1);
}

app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});
