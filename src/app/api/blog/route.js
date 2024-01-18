import { NextResponse } from 'next/server';

export const GET = async (requst) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return new NextResponse(posts);
  } catch (error) {
    return new NextResponse('Something went wrong');
  }
};
