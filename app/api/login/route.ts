import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const body = await request.json()
    const done=  await prisma.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    return NextResponse.json(done)
}