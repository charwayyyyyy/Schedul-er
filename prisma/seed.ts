import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const adminPassword = await hash('admin123', 10);
  await prisma.user.upsert({
    where: { email: 'admin@scheduler.com' },
    update: {},
    create: {
      email: 'admin@scheduler.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  // Create teacher users
  const teacherPassword = await hash('teacher123', 10);
  await prisma.user.upsert({
    where: { email: 'teacher@scheduler.com' },
    update: {},
    create: {
      email: 'teacher@scheduler.com',
      name: 'John Smith',
      password: teacherPassword,
      role: 'TEACHER',
    },
  });

  // Create student user
  const studentPassword = await hash('student123', 10);
  await prisma.user.upsert({
    where: { email: 'student@scheduler.com' },
    update: {},
    create: {
      email: 'student@scheduler.com',
      name: 'Alice Brown',
      password: studentPassword,
      role: 'STUDENT',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });