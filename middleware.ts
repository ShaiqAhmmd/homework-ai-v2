import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export default clerkMiddleware((auth, request) => {
  const ref = request.nextUrl.searchParams.get('ref');
  if (ref) {
    const response = NextResponse.next();
    response.cookies.set('ref', ref, { path: '/' });
    return response;
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
}