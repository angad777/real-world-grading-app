import { PrismaClient } from '@prisma/client'

describe('example test with Prisma Client', () => {
  let prisma = new PrismaClient()

  beforeAll(async () => {
    prisma.connect()
  })
  afterAll(async () => {
    prisma.disconnect()
  })
  test('test query', async () => {
    const data = await prisma.user.findMany({ take: 1, select: { id: true } })
    expect(data).toBeTruthy()
  })
})
