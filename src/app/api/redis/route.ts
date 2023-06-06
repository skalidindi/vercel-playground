import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const redis = new Redis({
  url: process.env.REDIS_URL ?? '',
  token: process.env.REDIS_TOKEN ?? '',
});

export async function GET() {
  let count = await redis.incr("counter");

  return NextResponse.json({ count });
}
