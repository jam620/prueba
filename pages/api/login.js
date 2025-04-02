import bcrypt from 'bcryptjs';
import { findUser } from '../../lib/users';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  try {
    const user = findUser(username);
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create a simple token that's compatible with Edge Runtime
    const token = Buffer.from(`${user.id}:${user.username}:${Date.now()}`).toString('base64');

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
} 