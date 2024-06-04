import { PrismaClient } from "@prisma/client";
import { PrismaClient as sqlite } from "@/prisma/generate/sqlite";
import { PrismaClient as mssql } from "@/prisma/generate/mssql";

const db = new sqlite();
const mssqlDb = new mssql();

async function test() {
  const token = await db.sMSToken.findUnique({
    where: {
      id: 2,
    },
    include: {
      user: true,
    },
  });
  console.log(token);
}
async function create() {
  const token = await db.sMSToken.create({
    data: {
      token: "1234",
      user: {
        connect: {
          id: 2,
        },
      },
    },
  });
  console.log(token);
}
// const test = async () => {
//   console.log("start");
//   const users = await sqliteDb.user.findMany({
//     where: {
//       name: {
//         contains: "mo",
//       },
//     },
//   });
//   const a = await mssqlDb.aLARM_INFO.findMany({
//     where: {
//       code: {
//         equals: "A",
//       },
//     },
//   });
//   console.log(users);
// };
test();
export default db;
