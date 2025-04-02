// This is a simple in-memory user store
// In a real application, you would use a database
const users = [
  {
    id: 1,
    username: 'admin',
    // This is a hashed version of 'password123'
    password: '$2a$10$XOPbrlUPQdwdJUpSrIF6X.LbE14qsMmKGhM1A8W9iq.IX1eAq5n6'
  }
];

export const findUser = (username) => {
  return users.find(user => user.username === username);
};

export const getUserById = (id) => {
  return users.find(user => user.id === id);
}; 