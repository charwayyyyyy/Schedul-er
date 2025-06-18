'use client';

import { useState } from 'react';
import { Plus, Search, Clock, Users } from 'lucide-react';

export default function ClassesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock data for classes
  const classes = [
    {
      id: 1,
      name: 'Advanced Mathematics',
      description: 'Complex analysis and abstract algebra',
      teacher: 'Dr. Smith',
      schedule: 'Monday, Wednesday 9:00 AM - 10:30 AM',
      students: 25,
      status: 'active',
    },
    {
      id: 2,
      name: 'Physics 101',
      description: 'Introduction to classical mechanics',
      teacher: 'Prof. Johnson',
      schedule: 'Tuesday, Thursday 11:00 AM - 12:30 PM',
      students: 30,
      status: 'active',
    },
    {
      id: 3,
      name: 'Chemistry Lab',
      description: 'Practical experiments in general chemistry',
      teacher: 'Dr. Williams',
      schedule: 'Friday 2:00 PM - 4:00 PM',
      students: 20,
      status: 'active',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Classes</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Plus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          New Class
        </button>
      </div>

      {/* Search and filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              placeholder="Search classes..."
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <select 
          aria-label="Filter by status"
          className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Classes grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((class_) => (
          <div
            key={class_.id}
            className="relative flex flex-col rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">{class_.name}</h3>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                {class_.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500">{class_.description}</p>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <Clock className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
              {class_.schedule}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Users className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
              {class_.students} students
            </div>
            <div className="mt-4 flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  class_.teacher
                )}&background=random`}
                alt={class_.teacher}
              />
              <span className="ml-2 text-sm font-medium text-gray-900">
                {class_.teacher}
              </span>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Edit
              </button>
              <button className="flex-1 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-red-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Class Modal would go here */}
    </div>
  );
}