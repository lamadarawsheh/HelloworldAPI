import { Request } from "express";

export default function getRealClientIPAddress(req: Request): string {
  if (req.headers["x-forwarded-for"]) {
    return req.headers["x-forwarded-for"]! as string;
  }

  const forwarded = req.headers["forwarded"] as string | undefined;
  if (forwarded) {
    const clientIP = getLastIpAddress(forwarded);
    if (clientIP) {
      return clientIP;
    }
  }

  return req.ip || "unknown";
}

const pattern = /for=(\[[\w:.]+\]|[\w:.]+)/;

function getLastIpAddress(forwardedHeader: string): string | null {
  const forwardedValues = forwardedHeader.split(",");

  let lastIp: string | null = null;

  for (const forwardedValue of forwardedValues) {
    const match = pattern.exec(forwardedValue);
    if (match) {
      lastIp = match[1];
    }
  }

  return lastIp;
}
