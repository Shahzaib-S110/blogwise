import { NextRequest, NextResponse } from "next/server";
import { translate } from "@vitalets/google-translate-api";

export async function POST(req: NextRequest) {
  const { summary } = await req.json();

  try {
    const res = await translate(summary, { to: "ur" });
    return NextResponse.json({ success: true, translated: res.text });
  } catch (err) {
    console.error("❌ Translation failed:", err);
    return NextResponse.json(
      { success: false, error: "Translation failed" },
      { status: 500 }
    );
  }
}