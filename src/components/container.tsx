import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className='mx-auto max-w-[1100px] flex flex-col min-h-screen bg-white border-l border-r'>
      {children}
    </div>
  )
}
