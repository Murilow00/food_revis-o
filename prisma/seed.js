import 'dotenv/config';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Iniciando seed...');

    await prisma.food.deleteMany();

    await prisma.food.createMany({
        data: [
            {
                name: 'macarrão',
                description: 'macarrão com molho vermelho',
                price: 20.9,
                category: 'principal',
                available: false,
            },
            {
                name: 'Batata',
                description: 'patatas picotadas e fritadas',
                price: 12.80,
                category: 'entrada',
            },
            {
                name: 'Pão australiano',
                description: 'um pão comum com uma cor amarronzada',
                price: 13.67,
                category: 'entrada'
            },
            {
                name: 'Sorvete',
                description: 'uma bola congelada com sabor artificial',
                price: 10,
                category: 'sobrimesa'
            },
            {
                name: 'Framburguer',
                description: 'Um hamburguer com carne de frango',
                price: 1000,
                category:'principal'
            }
        ],
    });

    console.log('✅ Seed concluído!');
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
