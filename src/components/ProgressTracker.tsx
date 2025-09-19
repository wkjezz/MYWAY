const ProgressTracker = () => {
  // Mock data - in a real app, this would come from a database
  const weeklyProgress = [
    { day: 'Mon', weight: 180, mood: 'good', completed: true },
    { day: 'Tue', weight: 179.5, mood: 'great', completed: true },
    { day: 'Wed', weight: 179.8, mood: 'okay', completed: true },
    { day: 'Thu', weight: 179.2, mood: 'good', completed: true },
    { day: 'Fri', weight: 178.9, mood: 'great', completed: false },
    { day: 'Sat', weight: null, mood: null, completed: false },
    { day: 'Sun', weight: null, mood: null, completed: false },
  ]

  const goals = [
    { id: 1, title: 'Drink 8 glasses of water daily', completed: 5, total: 7 },
    { id: 2, title: 'Exercise 30 minutes', completed: 4, total: 7 },
    { id: 3, title: 'Eat 5 servings of vegetables', completed: 3, total: 7 },
    { id: 4, title: 'Get 8 hours of sleep', completed: 6, total: 7 },
  ]

  const getMoodEmoji = (mood: string | null) => {
    switch (mood) {
      case 'great': return '😊'
      case 'good': return '🙂'
      case 'okay': return '😐'
      case 'struggling': return '😔'
      case 'difficult': return '😰'
      default: return '⚪'
    }
  }

  return (
    <div className="space-y-6">
      {/* Weekly Overview */}
      <div className="journal-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">This Week's Progress</h2>
        
        <div className="grid grid-cols-7 gap-4 mb-6">
          {weeklyProgress.map((day) => (
            <div
              key={day.day}
              className={`text-center p-4 rounded-lg border-2 ${
                day.completed
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="font-semibold text-gray-700 mb-2">{day.day}</div>
              <div className="text-2xl mb-2">{getMoodEmoji(day.mood)}</div>
              <div className="text-sm text-gray-600">
                {day.weight ? `${day.weight} lbs` : '-'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Goals Progress */}
      <div className="journal-card">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Weekly Goals</h3>
        
        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-gray-800">{goal.title}</p>
                <div className="flex items-center mt-2">
                  <div className="bg-gray-200 rounded-full h-2 flex-1 mr-3">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(goal.completed / goal.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">
                    {goal.completed}/{goal.total}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="journal-card text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">-2.1</div>
          <div className="text-gray-600">Pounds Lost This Week</div>
        </div>
        
        <div className="journal-card text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
          <div className="text-gray-600">Days Journaled</div>
        </div>
        
        <div className="journal-card text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">73%</div>
          <div className="text-gray-600">Weekly Goal Achievement</div>
        </div>
      </div>
    </div>
  )
}

export default ProgressTracker