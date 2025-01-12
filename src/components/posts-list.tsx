import { prisma } from '@/lib/db'
import Link from 'next/link'
import React from 'react'

export default async function PostsList() {

  // const response = await fetch('https://dummyjson.com/posts?limit=10')
  // const data = await response.json()

  const posts = await prisma.post.findMany()

  return (
    <>
       <ol className="max-w-[750px] mx-auto leading-8 ">
        { posts.map(( post ) => (
          <li key={post.id} className='hover:underline underline-offset-2'>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ol>
    </>
  )
}
