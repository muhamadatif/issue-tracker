import authOptions from "@/app/auth/authOptions";
import { IssueSchema } from "@/app/ValidationSchema";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const body = await request.json();
  const validation = IssueSchema.safeParse(body);

  console.log(IssueSchema, validation);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 404 });

  const issue = await prisma.issue.findUnique({
    where: {
      id: +params.id,
    },
  });

  if (!issue)
    return NextResponse.json({ error: "Invalid issues" }, { status: 404 });
  const updatedIssue = await prisma.issue.update({
    where: {
      id: issue.id,
    },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedIssue);
}

export async function DELETE(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const issue = await prisma.issue.findUnique({
    where: {
      id: +params.id,
    },
  });

  if (!issue)
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });
  await prisma.issue.delete({
    where: {
      id: issue.id,
    },
  });

  return NextResponse.json({});
}
