/*
  Warnings:

  - You are about to drop the `Link` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Votes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Link";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_Votes";
PRAGMA foreign_keys=on;
