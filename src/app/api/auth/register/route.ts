import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { name, email, password, role } = await req.json();

    // Check if email already exists
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (role !== 'STUDENT' && role !== 'TEACHER') {
      return NextResponse.json(
        { error: 'Invalid role. Must be either STUDENT or TEACHER' },
        { status: 400 }
      );
    }
    

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create user
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { user: userWithoutPassword, message: 'User created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}