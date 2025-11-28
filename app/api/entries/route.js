let entries = [];

export async function GET() {
  return Response.json(entries);
}

export async function POST(req) {
  const body = await req.json();
  entries.push(body);
  return Response.json({ message: "Entry added", entries });
}
