import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// However we don't need the request object but if we removed it next will cashe the output of this end point
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(users);
}
