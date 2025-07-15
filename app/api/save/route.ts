import { NextRequest, NextResponse } from "next/server";

// Temporary fallback POST handler
export async function POST(req: NextRequest) {
  try {
    const { summary, fullText } = await req.json();

    // Fake save operation – ready to hook into real logic
    console.log("📝 Received:", { summary, fullText });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("❌ Error in save route:", err.message);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
