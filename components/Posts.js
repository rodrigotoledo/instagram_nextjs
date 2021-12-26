import React from 'react'
import faker from 'faker'
import Post from './Post'

export default function Posts() {
  const posts = [
    {
      id: 1,
      username: 'rodrigotoledo',
      userImg:
        'https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/216834911_2994840640838428_585535549365149787_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9ZDSYnYgwSIAX_e7s_K&_nc_ht=scontent-gig2-1.xx&oh=00_AT9cxMS5xUGWnvYPqYzTUaFZQrNsmKvmuTb1NeGZAMtHzg&oe=61CCB37B',
      img:
        'https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/216834911_2994840640838428_585535549365149787_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9ZDSYnYgwSIAX_e7s_K&_nc_ht=scontent-gig2-1.xx&oh=00_AT9cxMS5xUGWnvYPqYzTUaFZQrNsmKvmuTb1NeGZAMtHzg&oe=61CCB37B',
      caption: 'Subscribe amd desubscribe',
    },
    {
      id: 2,
      username: 'rodrigotoledo',
      userImg:
        'https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/216834911_2994840640838428_585535549365149787_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9ZDSYnYgwSIAX_e7s_K&_nc_ht=scontent-gig2-1.xx&oh=00_AT9cxMS5xUGWnvYPqYzTUaFZQrNsmKvmuTb1NeGZAMtHzg&oe=61CCB37B',
      img:
        'https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/216834911_2994840640838428_585535549365149787_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9ZDSYnYgwSIAX_e7s_K&_nc_ht=scontent-gig2-1.xx&oh=00_AT9cxMS5xUGWnvYPqYzTUaFZQrNsmKvmuTb1NeGZAMtHzg&oe=61CCB37B',
      caption: 'Subscribe amd desubscribe',
    },
    {
      id: 3,
      username: 'rodrigotoledo',
      userImg:
        'https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/216834911_2994840640838428_585535549365149787_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9ZDSYnYgwSIAX_e7s_K&_nc_ht=scontent-gig2-1.xx&oh=00_AT9cxMS5xUGWnvYPqYzTUaFZQrNsmKvmuTb1NeGZAMtHzg&oe=61CCB37B',
      img:
        'https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/216834911_2994840640838428_585535549365149787_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9ZDSYnYgwSIAX_e7s_K&_nc_ht=scontent-gig2-1.xx&oh=00_AT9cxMS5xUGWnvYPqYzTUaFZQrNsmKvmuTb1NeGZAMtHzg&oe=61CCB37B',
      caption: 'Subscribe amd desubscribe',
    },
  ]
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
