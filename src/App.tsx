import { useState } from 'react'
import Header from './components/Header'
import JournalEntry from './components/JournalEntry'
import ProgressTracker from './components/ProgressTracker'
import AIAssistant from './components/AIAssistant'

function App() {
  const [activeTab, setActiveTab] = useState<'journal' | 'progress' | 'ai'>('journal')

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 flex space-x-1">
            <button
              onClick={() => setActiveTab('journal')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'journal'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Journal
            </button>
            <button
              onClick={() => setActiveTab('progress')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'progress'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Progress
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'ai'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              AI Assistant
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'journal' && <JournalEntry />}
          {activeTab === 'progress' && <ProgressTracker />}
          {activeTab === 'ai' && <AIAssistant />}
        </div>
      </div>
    </div>
  )
}

export default App
