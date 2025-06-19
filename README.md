# Schedul-er: Class Scheduling System

## Overview
Schedul-er is a modern web application designed to streamline the class scheduling process for educational institutions. It provides an intuitive interface for managing classes, teachers, and students while ensuring efficient time management and resource allocation.

## Features
- **User Authentication**
  - Role-based access control (Admin, Teacher, Student)
  - Secure login and registration
  - Protected routes and API endpoints

- **Class Management**
  - Create and manage class schedules
  - Assign teachers to classes
  - Student enrollment system
  - Real-time schedule updates

- **Dashboard**
  - Interactive calendar view
  - Upcoming classes overview
  - Teacher availability tracking
  - Student enrollment status

- **User Management**
  - Comprehensive user profiles
  - Role assignment and management
  - Activity tracking

## Tech Stack
- **Frontend**: Next.js 15.3, React 19, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js
- **Styling**: TailwindCSS, HeadlessUI

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/charwayyyyyy/Schedul-er.git
   cd schedul-er
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up the database
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Test Accounts

### Admin Account
- Email: admin@scheduler.com
- Password: admin123

### Teacher Account
- Email: teacher@scheduler.com
- Password: teacher123

### Student Account
- Email: student@scheduler.com
- Password: student123

## Project Structure
```
src/
├── app/              # Next.js app directory
│   ├── api/          # API routes
│   ├── dashboard/    # Dashboard pages
│   ├── login/        # Authentication pages
│   └── signup/       # User registration
├── lib/              # Utility functions and configurations
└── components/       # Reusable React components
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is open source, meaning you can use, modify, and distribute it as needed. Please do give the necessary credit tho.
