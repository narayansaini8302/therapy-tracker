import React, { useState } from 'react';
import { 
  FaUtensils, 
  FaChartLine, 
  FaCalendarAlt,
  FaRunning,
  FaUserMd,
  FaClipboardList
} from 'react-icons/fa';

export const Progressdietplan = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [activeTab, setActiveTab] = useState('progress');

  // Sample patient data
  const patient = {
    name: "Robert Apollo",
    age: 42,
    condition: "Lower Back Pain",
    therapist: "Dr. Sarah Johnson",
    startDate: "2023-10-15",
    duration: "6 weeks"
  };

  // Therapy progress data (day by day)
  const therapyProgress = [
    { day: 1, completed: true, painLevel: 6, exercises: 4, notes: "Initial assessment completed" },
    { day: 2, completed: true, painLevel: 5, exercises: 5, notes: "Good form on exercises" },
    { day: 3, completed: true, painLevel: 4, exercises: 6, notes: "Showing improvement" },
    { day: 4, completed: true, painLevel: 4, exercises: 6, notes: "Maintaining progress" },
    { day: 5, completed: true, painLevel: 3, exercises: 7, notes: "Excellent session today" },
    { day: 6, completed: false, painLevel: null, exercises: null, notes: "Rest day" },
    { day: 7, completed: false, painLevel: null, exercises: null, notes: "Scheduled session" },
  ];

  // Calculate progress statistics
  const completedSessions = therapyProgress.filter(day => day.completed).length;
  const totalSessions = therapyProgress.length;
  const completionPercentage = Math.round((completedSessions / totalSessions) * 100);
  
  // Weekly progress data for the graph
  const weeklyProgress = [
    { week: 'Week 1', completion: 20, painLevel: 6, exercises: 12 },
    { week: 'Week 2', completion: 45, painLevel: 5, exercises: 18 },
    { week: 'Week 3', completion: 65, painLevel: 4, exercises: 22 },
    { week: 'Week 4', completion: 80, painLevel: 3, exercises: 28 },
    { week: 'Week 5', completion: 90, painLevel: 2, exercises: 32 },
    { week: 'Week 6', completion: 100, painLevel: 1, exercises: 36 }
  ];

  // Diet plan data
  const dietPlan = {
    goals: ["Reduce inflammation", "Increase protein intake", "Stay hydrated"],
    meals: {
      breakfast: {
        name: "Anti-inflammatory Smoothie",
        ingredients: ["Spinach", "Blueberries", "Greek yogurt", "Flax seeds", "Almond milk"],
        calories: 320,
        protein: 18
      },
      lunch: {
        name: "Grilled Chicken Salad",
        ingredients: ["Mixed greens", "Grilled chicken breast", "Quinoa", "Avocado", "Olive oil dressing"],
        calories: 450,
        protein: 35
      },
      snack: {
        name: "Greek Yogurt with Nuts",
        ingredients: ["Greek yogurt", "Almonds", "Walnuts", "Honey"],
        calories: 280,
        protein: 15
      },
      dinner: {
        name: "Baked Salmon with Vegetables",
        ingredients: ["Salmon fillet", "Broccoli", "Sweet potato", "Asparagus", "Lemon herb seasoning"],
        calories: 520,
        protein: 40
      }
    },
    restrictions: ["Processed foods", "Sugar", "Excessive sodium"]
  };

  // Upcoming sessions data
  const upcomingSessions = [
    {
      type: "Physical Therapy Session",
      time: "Tomorrow, 10:00 AM",
      icon: <FaRunning className="text-blue-400" />,
      color: "blue"
    },
    {
      type: "Nutritionist Consultation",
      time: "Oct 25, 2:30 PM",
      icon: <FaUtensils className="text-green-400" />,
      color: "green"
    }
  ];

  // Function to render the progress graph
  const renderProgressGraph = () => {
    return (
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-400">Therapy Progress Overview</h4>
        
        {/* Progress Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-900 bg-opacity-40 p-4 rounded-lg border border-blue-800 text-center">
            <div className="text-2xl font-bold text-blue-300">{completedSessions}/{totalSessions}</div>
            <div className="text-sm text-blue-200">Sessions Completed</div>
          </div>
          <div className="bg-green-900 bg-opacity-40 p-4 rounded-lg border border-green-800 text-center">
            <div className="text-2xl font-bold text-green-300">{completionPercentage}%</div>
            <div className="text-sm text-green-200">Overall Progress</div>
          </div>
          <div className="bg-purple-900 bg-opacity-40 p-4 rounded-lg border border-purple-800 text-center">
            <div className="text-2xl font-bold text-purple-300">{therapyProgress[selectedDay]?.painLevel || 0}/10</div>
            <div className="text-sm text-purple-200">Current Pain Level</div>
          </div>
        </div>

        {/* Weekly Progress Bars */}
        <h5 className="text-md font-medium mb-3 text-gray-300">Weekly Progress</h5>
        <div className="space-y-4 mb-6">
          {weeklyProgress.map((week, index) => (
            <div key={index} className="flex items-center">
              <div className="w-20 text-sm text-gray-400">{week.week}</div>
              <div className="flex-1 ml-2">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Progress: {week.completion}%</span>
                  <span>Pain: {week.painLevel}/10</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full" 
                    style={{ width: `${week.completion}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>{week.exercises} exercises</span>
                  <span>{week.completion}% Complete</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Patient Info, Progress, and Upcoming Sessions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Patient Summary */}
          <div className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaUserMd className="text-blue-400 mr-2" /> Patient Overview
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-900 bg-opacity-40 p-4 rounded-lg border border-blue-800">
                <p className="text-sm text-blue-300">Age</p>
                <p className="text-2xl font-bold">{patient.age}</p>
              </div>
              <div className="bg-green-900 bg-opacity-40 p-4 rounded-lg border border-green-800">
                <p className="text-sm text-green-300">Condition</p>
                <p className="text-lg font-bold">{patient.condition}</p>
              </div>
              <div className="bg-purple-900 bg-opacity-40 p-4 rounded-lg border border-purple-800">
                <p className="text-sm text-purple-300">Therapist</p>
                <p className="text-lg font-bold">{patient.therapist.split(' ')[0]}</p>
              </div>
              <div className="bg-orange-900 bg-opacity-40 p-4 rounded-lg border border-orange-800">
                <p className="text-sm text-orange-300">Duration</p>
                <p className="text-lg font-bold">{patient.duration}</p>
              </div>
            </div>
          </div>

          {/* Progress Tabs */}
          <div className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl border border-gray-700">
            <div className="border-b border-gray-700">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('daily')}
                  className={`py-4 px-6 text-center font-medium flex items-center justify-center space-x-2 flex-1 ${activeTab === 'daily' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
                >
                  <FaCalendarAlt />
                  <span>Daily Progress</span>
                </button>
                <button
                  onClick={() => setActiveTab('progress')}
                  className={`py-4 px-6 text-center font-medium flex items-center justify-center space-x-2 flex-1 ${activeTab === 'progress' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
                >
                  <FaChartLine />
                  <span>Therapy Progress</span>
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'daily' ? (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Daily Progress</h3>
                  <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
                    {therapyProgress.map((day, index) => (
                      <button
                        key={day.day}
                        onClick={() => setSelectedDay(index)}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg min-w-[80px] ${selectedDay === index ? 'bg-blue-900 bg-opacity-40 border border-blue-700' : 'bg-gray-700 hover:bg-gray-600'}`}
                      >
                        <span className="text-sm">Day {day.day}</span>
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center mt-2 ${day.completed ? 'bg-green-500 text-white' : 'bg-gray-600'}`}>
                          {day.completed ? '✓' : ''}
                        </span>
                      </button>
                    ))}
                  </div>

                  {therapyProgress[selectedDay] && (
                    <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600">
                      <h4 className="font-medium mb-2">Day {therapyProgress[selectedDay].day} Details</h4>
                      {therapyProgress[selectedDay].completed ? (
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-400">Pain Level</p>
                            <div className="flex items-center mt-1">
                              <div className="w-full bg-gray-600 rounded-full h-2.5">
                                <div 
                                  className="bg-red-500 h-2.5 rounded-full" 
                                  style={{ width: `${therapyProgress[selectedDay].painLevel * 10}%` }}
                                ></div>
                              </div>
                              <span className="ml-2 text-sm font-medium">{therapyProgress[selectedDay].painLevel}/10</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Exercises Completed</p>
                            <p className="text-lg font-semibold">{therapyProgress[selectedDay].exercises}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm text-gray-400">Therapist Notes</p>
                            <p className="mt-1">{therapyProgress[selectedDay].notes}</p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-400">No session scheduled for this day.</p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {/* Progress Graph */}
                  {renderProgressGraph()}
                </div>
              )}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaClipboardList className="text-purple-400 mr-2" /> Upcoming Sessions
            </h2>
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div key={index} className={`flex items-center p-3 bg-${session.color}-900 bg-opacity-30 rounded-lg border border-${session.color}-800`}>
                  <div className={`bg-${session.color}-800 p-2 rounded-lg mr-3`}>
                    {session.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{session.type}</p>
                    <p className="text-sm text-gray-400">{session.time}</p>
                  </div>
                  <button className={`text-${session.color}-400 text-sm font-medium`}>Details</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Diet Plan Only */}
        <div className="space-y-6">
          <div className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaUtensils className="text-green-400 mr-2" /> Nutrition Plan
            </h2>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Dietary Goals</h3>
              <ul className="space-y-2">
                {dietPlan.goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-4 flex items-center">
                <FaCalendarAlt className="text-blue-400 mr-2" /> Today's Meals
              </h3>
              <div className="space-y-4">
                {Object.entries(dietPlan.meals).map(([mealType, meal]) => (
                  <div key={mealType} className="border border-gray-700 rounded-lg p-4 bg-gray-700 bg-opacity-30">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium capitalize text-gray-300">{mealType}</h4>
                        <p className="text-lg text-blue-300 font-semibold">{meal.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{meal.calories} cal</p>
                        <p className="text-sm text-gray-400">{meal.protein}g protein</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm text-gray-400 mb-1">Ingredients:</p>
                      <div className="flex flex-wrap gap-2">
                        {meal.ingredients.map((ingredient, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Dietary Restrictions</h3>
              <div className="flex flex-wrap gap-2">
                {dietPlan.restrictions.map((restriction, index) => (
                  <span key={index} className="px-3 py-1 bg-red-900 bg-opacity-40 text-red-300 rounded-full text-sm border border-red-800">
                    Avoid {restriction}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};