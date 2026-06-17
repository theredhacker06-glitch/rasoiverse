const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const adminEmails = [
  'theredhacker06@gmail.com',
  'runiveresphere06@gmail.com',
  'rupalisuryawanshi05@gmail.com',
  'p.manoj0860@gmail.com',
];

async function main() {
  console.log('🌱 Seeding database...');

  // Seed admin users
  for (const email of adminEmails) {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      const hashedPassword = await bcrypt.hash('ChangeMe@123', 10);
      await prisma.user.create({
        data: {
          email,
          name: email.split('@')[0],
          password: hashedPassword,
          role: 'ADMIN',
        },
      });
      console.log(`✅ Created admin user: ${email}`);
    } else {
      // Update role to ADMIN if not already
      await prisma.user.update({
        where: { email },
        data: { role: 'ADMIN' },
      });
      console.log(`✅ Updated ${email} to ADMIN role`);
    }
  }

  console.log('✅ Seeding complete!');
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
