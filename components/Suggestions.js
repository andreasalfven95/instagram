import { useState, useEffect } from 'react'
import faker from 'faker'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold'>See all</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className='flex items-center justify-between mt-3'
        >
          <img
            src={profile.avatar}
            alt='avatar'
            className='h-10 w-10 rounded-full border p-[2px]'
          />

          <div className='flex-1 ml-4'>
            <h2 className='font-semibold text-sm'>{profile.username}</h2>
            <h3 className='text-xs text-gray-400 truncate'>
              Works at {profile.company.name}
            </h3>
          </div>
          <button className='text-blue-400 text-xs font-bold pl-4'>
            Follow
          </button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
