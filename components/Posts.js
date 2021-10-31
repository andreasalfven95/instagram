import Post from './Post'

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
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          avatar={post.avatar}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
