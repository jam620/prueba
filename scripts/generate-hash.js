const bcrypt = require('bcryptjs');

const password = 'password123';
const storedHash = '$2a$10$XOPbrlUPQdwdJUpSrIF6X.LbE14qsMmKGhM1A8W9iq.IX1eAq5n6';

async function generateAndVerify() {
  const newHash = await bcrypt.hash(password, 10);
  console.log('New hash:', newHash);
  
  const isValid = await bcrypt.compare(password, storedHash);
  console.log('Stored hash valid:', isValid);
  
  const isValidNew = await bcrypt.compare(password, newHash);
  console.log('New hash valid:', isValidNew);
}

generateAndVerify(); 