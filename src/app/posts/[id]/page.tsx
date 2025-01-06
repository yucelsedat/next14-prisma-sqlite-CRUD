import React from 'react'

type Props = {
  params: {
    id: string
  }
}

export default async function Post({ params: { id }}: Props) {

  const response = await fetch(`https://dummyjson.com/posts/${id}`)
  const post = await response.json()
  return (
    <main className="text-center pt-16 px-5">
      <h1 className='text-4xl md:text-5xl font-bold mb-5'>{post.title}</h1>
      <p className="max-w-[750px] mx-auto leading-8 ">{post.body}</p>
    </main>
  )
}
