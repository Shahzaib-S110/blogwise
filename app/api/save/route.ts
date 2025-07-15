import { NextRequest, NextResponse } from "next/server";
// ✅ Correct relative paths
import { supabase } from "../../../lib/supabase";
import { connectMongo } from "../../../lib/mongodb";

import mongoose from "mongoose";

// Schema definition
const BlogSchema = new mongoose.Schema({
  fullText: String,
});

// Model reuse (important to avoid overwrite on hot reload)
const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

// ✅ Exported POST function for Next.js App Router
export async function POST(req: NextRequest) {
  try {
    const { summary, fullText } = await req.json();

    // Save to Supabase
    const { error: supabaseError } = await supabase
      .from("summaries")
      .insert([{ summary }]);
    if (supabaseError) throw supabaseError;

    // Save to MongoDB
    await connectMongo(); // ensures connection before saving
    const blog = new Blog({ fullText });
    await blog.save();

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("❌ Save failed:", err.message);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
