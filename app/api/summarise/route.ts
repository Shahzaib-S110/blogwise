import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  // Take first 2–3 sentences as a "summary"
  const summary = text.split(". ").slice(0, 3).join(". ") + ".";

  return NextResponse.json({ success: true, summary });
}