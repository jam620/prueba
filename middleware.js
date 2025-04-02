import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your-secret-key'; // In production, use environment variables

export function middleware(request) {
  // Only protect /dashboard route
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = request.cookies.token;

    if (!token) {
      return Response.redirect(new URL('/login', request.url));
    }

    // Simple token check - in production, you would want to implement proper JWT verification
    // that's compatible with Edge Runtime
    if (!token.startsWith('ey')) {
      return Response.redirect(new URL('/login', request.url));
    }

    return Response.next();
  }

  return Response.next();
}

export const config = {
  matcher: '/dashboard/:path*',
}; 