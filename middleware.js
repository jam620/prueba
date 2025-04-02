import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your-secret-key'; // In production, use environment variables

export function middleware(request) {
  // Only protect /dashboard route
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = request.cookies.token;

    if (!token) {
      return Response.redirect(new URL('/login', request.url));
    }

    try {
      jwt.verify(token, JWT_SECRET);
      return Response.next();
    } catch (error) {
      return Response.redirect(new URL('/login', request.url));
    }
  }

  return Response.next();
}

export const config = {
  matcher: '/dashboard/:path*',
}; 