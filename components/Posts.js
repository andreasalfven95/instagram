import Post from './Post'
import { useState, useEffect } from 'react'
import { onSnapshot, collection, query, orderBy } from '@firebase/firestore'
import { db } from '../firebase'

const posts = [
  {
    id: '123',
    username: 'p.a.alfven',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C4E03AQF8MvX8VZxOzw/profile-displayphoto-shrink_200_200/0/1606846457796?e=1640822400&v=beta&t=AH8kKZvnTra0ePBoT_aFOGWbOdBG_c_-0iC3-eGY_LE',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQF8MvX8VZxOzw/profile-displayphoto-shrink_200_200/0/1606846457796?e=1640822400&v=beta&t=AH8kKZvnTra0ePBoT_aFOGWbOdBG_c_-0iC3-eGY_LE',
    caption: 'Hello world!',
  },
  {
    id: '123',
    username: 'p.a.alfven',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C4E03AQF8MvX8VZxOzw/profile-displayphoto-shrink_200_200/0/1606846457796?e=1640822400&v=beta&t=AH8kKZvnTra0ePBoT_aFOGWbOdBG_c_-0iC3-eGY_LE',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQF8MvX8VZxOzw/profile-displayphoto-shrink_200_200/0/1606846457796?e=1640822400&v=beta&t=AH8kKZvnTra0ePBoT_aFOGWbOdBG_c_-0iC3-eGY_LE',
    caption: 'Hello world!',
  },
]

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    [db]
  )

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          avatar={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
