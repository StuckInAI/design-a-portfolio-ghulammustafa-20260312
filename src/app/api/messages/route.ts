import { NextRequest, NextResponse } from 'next/server';
import { getDataSource } from '@/lib/database';
import { Message } from '@/entities/Message';

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    const errors: string[] = [];

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long.');
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
      errors.push('Please provide a valid email address.');
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
      errors.push('Subject must be at least 3 characters long.');
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long.');
    }

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const ds = await getDataSource();
    const messageRepo = ds.getRepository(Message);

    const newMessage = messageRepo.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      body: message.trim(),
      read: false,
    });

    await messageRepo.save(newMessage);

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
