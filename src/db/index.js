import { PrismaClient } from '@prisma/client';

// the db object is a new PrismaClient instance and acts as the main entry point to the database.
export const db = new PrismaClient();