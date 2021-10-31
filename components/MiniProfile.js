const MiniProfile = () => {
  return (
    <div className='flex items-center justify-between ml-10'>
      <img
        src='https://media-exp1.licdn.com/dms/image/C4E03AQF8MvX8VZxOzw/profile-displayphoto-shrink_200_200/0/1606846457796?e=1640822400&v=beta&t=AH8kKZvnTra0ePBoT_aFOGWbOdBG_c_-0iC3-eGY_LE'
        alt='avatar'
        className='w-16 h-16 rounded-full border p-[2px]'
      />

      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>p.a.alfven</h2>
        <h3 className='text-sm text-gray-400'>Welcome to instagram!</h3>
      </div>

      <button className='text-blue-400 text-sm font-semibold'>Sign out!</button>
    </div>
  )
}

export default MiniProfile
