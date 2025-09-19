import { useState } from 'react'

const JournalEntry = () => {
  const [entry, setEntry] = useState('')
  const [mood, setMood] = useState('')
  const [weight, setWeight] = useState('')
  const [goalToday, setGoalToday] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save to a database or local storage
    console.log('Journal entry submitted:', { entry, mood, weight, goalToday })
    // Reset form
    setEntry('')
    setMood('')
    setWeight('')
    setGoalToday('')
    alert('Journal entry saved! 🎉')
  }

  return (
    <div className="journal-card">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Today's Journal Entry</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Weight Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Weight (optional)
          </label>
          <input
            type="number"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight in lbs or kg"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Mood Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How are you feeling today?
          </label>
          <div className="grid grid-cols-5 gap-3">
            {[
              { emoji: '😊', label: 'Great', value: 'great' },
              { emoji: '🙂', label: 'Good', value: 'good' },
              { emoji: '😐', label: 'Okay', value: 'okay' },
              { emoji: '😔', label: 'Struggling', value: 'struggling' },
              { emoji: '😰', label: 'Difficult', value: 'difficult' }
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setMood(option.value)}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  mood === option.value
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <div className="text-2xl mb-1">{option.emoji}</div>
                <div className="text-xs font-medium">{option.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Today's Goal */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What's your main goal for today?
          </label>
          <input
            type="text"
            value={goalToday}
            onChange={(e) => setGoalToday(e.target.value)}
            placeholder="e.g., Drink 8 glasses of water, Walk 30 minutes, Eat more vegetables"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Journal Entry */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Journal Entry
          </label>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Write about your day, challenges, victories, thoughts, or anything on your mind..."
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full"
        >
          Save Journal Entry
        </button>
      </form>
    </div>
  )
}

export default JournalEntry