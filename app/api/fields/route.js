let fields = [];

export async function GET() {
  return Response.json(fields);
}

export async function POST(req) {
  const body = await req.json();
  fields.push(body);
  return Response.json({ message: "Field added", fields });
}
