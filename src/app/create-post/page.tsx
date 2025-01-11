'use client'

import { createPost } from '@/actions/actions'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'

export default async function Page() {

  return (
    <main className='text-center pt-16 '>
      <h1 className='text-4xl md:text-5xl font-bold mb-8'>
        Create Post
      </h1>
      <form 
        className='max-w-[300px] mx-auto flex flex-col gap-2 mb-4'
        action={createPost}
      >
        <input 
          className='bg-gray-100 border rounded px-3 py-1'
          type="text" 
          name="title" 
          id="" 
          placeholder='Title for new post' 
        />
        <textarea 
          className='bg-gray-100 border rounded px-3 py-1'
          name="body" 
          rows={5}
          placeholder='Context of post ' 
        />

        <button className='bg-blue-700 text-white rounded p-2'>Submit</button>
      </form>
      <LogoutLink className='bg-black text-white rounded p-2'>Log out</LogoutLink>
    </main>
  )
}
