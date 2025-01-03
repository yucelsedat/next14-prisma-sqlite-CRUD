import Link from 'next/link'
import React from 'react'

export default async function Posts() {

  const response = await fetch('https://dummyjson.com/posts?limit=10')
  // const data = await response.json()
  const data = await response.json()
  
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
      <ol className="max-w-[750px] mx-auto leading-8 ">
        { data.posts.map(( post:any ) => (
          <li key={post.id} className='hover:underline underline-offset-2'>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ol>
    </main>
  )
}
