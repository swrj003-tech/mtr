import { PrismaClient } from '@prisma/client';
import path from 'path';
import 'dotenv/config';

const prisma = new PrismaClient();

export default prisma;
