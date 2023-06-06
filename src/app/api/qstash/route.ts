import { verifySignature } from "@upstash/qstash/nextjs";

// export const runtime = 'edge'; // Does not work on egde... yet

export async function GET() {
  console.log("If this is printed, the signature has already been verified");

  return new Response(undefined, {
    status: 200,
  });
}

export default verifySignature(GET);
