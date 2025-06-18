'use client';

import { useState } from 'react';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

export default function DashboardPage() {
  const [currentDate] = useState(new Date());

  // Mock data for upcoming classes
  const upcomingClasses = [
    {
      id: 1,
      name: 'Mathematics',
      teacher: 'Dr. Smith',
      time: '09:00 AM - 10:30 AM',
      day: 'Monday',
      room: 'Room 101',
    },
    {
      id: 2,
      name: 'Physics',
      teacher: 'Prof. Johnson',
      time: '11:00 AM - 12:30 PM',
      day: 'Monday',
      room: 'Room 203',
    },
    {
      id: 3,
      name: 'Chemistry',
      teacher: 'Dr. Williams',
      time: '02:00 PM - 03:30 PM',
      day: 'Tuesday',
      room: 'Lab 302',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">
          {currentDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Calendar Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Calendar</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-500">
              View full calendar
            </button>
          </div>
          <div className="border rounded-lg p-4">
            <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-500 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>
            {/* Calendar grid would go here - simplified for now */}
            <div className="grid grid-cols-7 gap-2 text-sm">
              {Array.from({ length: 35 }).map((_, i) => {
                const day = i - 3; // Adjust starting day
                return (
                  <div
                    key={i}
                    className={`p-2 text-center rounded-lg ${
                      day === currentDate.getDate() - 1
                        ? 'bg-indigo-600 text-white'
                        : day >= 0 && day < 31
                        ? 'hover:bg-gray-100 cursor-pointer'
                        : 'text-gray-300'
                    }`}
                  >
                    {day >= 0 && day < 31 ? day + 1 : ''}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Upcoming Classes */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Upcoming Classes</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-500">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {upcomingClasses.map((class_) => (
              <div
                key={class_.id}
                className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-3">
                  <CalendarDays className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {class_.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">{class_.teacher}</p>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      {class_.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      {class_.room}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}