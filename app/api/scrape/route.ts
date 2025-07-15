import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  try {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);

    const mainText = $("article").text() || $("p").text();

    if (!mainText || mainText.trim().length < 50) {
      throw new Error("Could not extract blog content");
    }

    return NextResponse.json({
      success: true,
      text: mainText.replace(/\s+/g, " ").trim(),
    });
  } catch (err) {
    console.error("❌ Scrape error:", err);
    return NextResponse.json(
      { success: false, error: (err as Error).message },
      { status: 500 }
    );
  }
}
