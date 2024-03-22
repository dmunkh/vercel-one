// import { db } from '@vercel/postgres';
 
// export default async function handler(request, response) {
//   const client = await db.connect();
//   try {
    
//       await client.sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
//       const names = ['munkh','bat'];
//       await client.sql`INSERT INTO Pets( Name, Owner) VALUES(${names[0]}, ${names[1]});`;
    
//   } catch (error) {
//     return response.status(500).json({ error });
//   }
//   const pets = await client.sql`SELECT * from Pets`;
//   return response.status(200).json({ pets });
// }

import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    // const result =
    //   await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;

      const names = ['munkh','bat'];      
      await sql`INSERT INTO Pets ( Name , Owner) VALUES( ${names[0]}, ${names[1]} );`;

      const result =
      await sql`SELECT * FROM Pets`;

    return response.status(200).json({ result: result.rows });
  } catch (error) {
    return response.status(500).json({ error });
  }
}