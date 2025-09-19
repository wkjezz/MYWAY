import { useState } from 'react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI wellness coach. I'm here to help you stay motivated and provide personalized advice for your weight loss journey. How can I support you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const quickQuestions = [
    "I'm feeling unmotivated today",
    "What healthy snack should I have?",
    "Help me plan my workout",
    "I had a setback, what should I do?",
    "Celebrate my progress with me!"
  ]

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date()
    }

    // Simulate AI response (in a real app, this would call an AI API)
    const aiResponse: Message = {
      id: messages.length + 2,
      text: getAIResponse(message),
      sender: 'ai',
      timestamp: new Date()
    }

    setMessages([...messages, userMessage, aiResponse])
    setInputMessage('')
  }

  const getAIResponse = (userMessage: string): string => {
    // Simple mock responses - in a real app, this would use ChatGPT API
    const responses = {
      motivation: "Remember why you started this journey! Every small step counts, and you've already come so far. Your commitment to tracking your progress shows dedication. What's one small thing you can do right now to move forward?",
      snack: "Great question! Consider having some Greek yogurt with berries, a handful of nuts, or some veggie sticks with hummus. These options provide protein and nutrients to keep you satisfied!",
      workout: "Let's create a balanced workout! How about starting with 10 minutes of walking, followed by some bodyweight exercises like squats, push-ups, and planks? What type of movement do you enjoy most?",
      setback: "Setbacks are part of the journey, not the end of it! What matters is that you're here, ready to keep going. Let's focus on one small positive action you can take today. What would feel manageable right now?",
      celebrate: "🎉 That's fantastic! I'm so proud of your progress! Celebrating wins, big and small, is crucial for maintaining motivation. What achievement would you like to share with me?",
      default: "I appreciate you sharing that with me! Based on your journey so far, I'd suggest focusing on consistency over perfection. What specific aspect of your wellness routine would you like to discuss today?"
    }

    const lowerMessage = userMessage.toLowerCase()
    if (lowerMessage.includes('motivat') || lowerMessage.includes('discourag')) return responses.motivation
    if (lowerMessage.includes('snack') || lowerMessage.includes('eat') || lowerMessage.includes('food')) return responses.snack
    if (lowerMessage.includes('workout') || lowerMessage.includes('exercise') || lowerMessage.includes('plan')) return responses.workout
    if (lowerMessage.includes('setback') || lowerMessage.includes('fail') || lowerMessage.includes('mistake')) return responses.setback
    if (lowerMessage.includes('celebrat') || lowerMessage.includes('progress') || lowerMessage.includes('achiev')) return responses.celebrate
    
    return responses.default
  }

  return (
    <div className="journal-card max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">AI Wellness Coach</h2>
      
      {/* Chat Messages */}
      <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-y-auto mb-6">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Questions */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-3">Quick questions to get started:</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(question)}
              className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="flex space-x-3">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
          placeholder="Type your message here..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={() => handleSendMessage(inputMessage)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors font-medium"
        >
          Send
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 mt-4 text-center">
        * This is a demo AI assistant. In a real application, this would be powered by ChatGPT or similar AI service.
      </p>
    </div>
  )
}

export default AIAssistant