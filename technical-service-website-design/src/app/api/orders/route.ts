import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { orders } from "@/db/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, phone, email, service, description, fileNote } = body;

    // Validation
    if (!name || !phone || !service || !description) {
      return NextResponse.json(
        { error: "لطفاً تمامی فیلدهای ستاره‌دار را تکمیل کنید" },
        { status: 400 }
      );
    }

    if (phone.length < 10) {
      return NextResponse.json(
        { error: "شماره تماس معتبر نیست" },
        { status: 400 }
      );
    }

    // Insert order
    const result = await db.insert(orders).values({
      name,
      phone,
      email: email || null,
      service,
      description,
      fileNote: fileNote || null,
    }).returning();

    return NextResponse.json({
      success: true,
      message: "سفارش شما با موفقیت ثبت شد",
      order: result[0],
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "خطایی رخ داد. لطفاً دوباره تلاش کنید" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allOrders = await db.select().from(orders).orderBy(orders.createdAt);
    return NextResponse.json({ orders: allOrders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "خطایی رخ داد" },
      { status: 500 }
    );
  }
}
