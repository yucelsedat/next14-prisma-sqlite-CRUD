import { createPost } from '@/actions/actions'

export default function Page() {
  return (
    <main className='text-center pt-16'>
      <h1 className='text-4xl md:text-5xl font-bold mb-8'>
        Create Post
      </h1>
      <form 
        className='max-w-[300px] mx-auto'
        action={createPost}
      >
        <input 
          className='bg-gray-100 border px-3 py-1'
          type="text" 
          name="title" 
          id="" 
          placeholder='Title for new post' 
        />

        <button className='bg-gray-700 text-white p-2 mt-5'>Submit</button>
      </form>
    </main>
  )
}
