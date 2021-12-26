import faker from 'faker'
import { useEffect, useState } from 'react'
import Story from './Story'

export default function Stories() {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img="https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/216834911_2994840640838428_585535549365149787_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9ZDSYnYgwSIAX_e7s_K&_nc_ht=scontent-gig2-1.xx&oh=00_AT9cxMS5xUGWnvYPqYzTUaFZQrNsmKvmuTb1NeGZAMtHzg&oe=61CCB37B"
          username={profile.username}
        />
      ))}
    </div>
  )
}
