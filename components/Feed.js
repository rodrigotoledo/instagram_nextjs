import React from 'react'
import Posts from './Posts'
import Stories from './Stories'

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* section */}
      <section className="cols-span-2">
        <Stories />
        <Posts />
      </section>
      {/* section */}
      <section>
        {/* mini profile */}
        {/* sugestions */}
      </section>
    </main>
  )
}
