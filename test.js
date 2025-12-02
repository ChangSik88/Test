// 만약 package.json에 "type": "module"이 있다면 아래 코드를 사용하세요.
import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;
const prisma = new PrismaClient();
async function main() {
  console.log('Prisma Client가 성공적으로 초기화되었습니다.');
  // 실제 DB에 연결해서 간단한 쿼리를 시도합니다.
  // 'user'는 본인의 실제 모델 이름 중 하나로 바꿔주세요.
  const userCount = await prisma.user.count(); 
  console.log(`현재 등록된 유저는 ${userCount}명 입니다.`);
}

main()
  .catch((e) => {
    console.error('에러 발생:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });