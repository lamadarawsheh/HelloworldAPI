import { Request } from 'express';

export default function getRealClientIPAddress(req: Request): string {

  const xForwardedFor = req.headers['x-forwarded-for'] as string | undefined;
  if (xForwardedFor) {
    const ipAddresses = xForwardedFor.split(',').map(ip => ip.trim());
    return ipAddresses[0] || 'unknown';
  }

  const forwarded = req.headers['forwarded'] as string | undefined;
  if (forwarded) {
    const clientIP = getLastIpAddress(forwarded);
    if (clientIP) {
      return clientIP;
    }
  }

  return req.ip || 'unknown';
}

const pattern = /for=(\[[\w:.]+\]|[\w:.]+)/;

function getLastIpAddress(forwardedHeader: string): string | null {
  
  const forwardedValues = forwardedHeader.split(',');

  let lastIp: string | null = null;

  for (const forwardedValue of forwardedValues) {
    const match = pattern.exec(forwardedValue);
    if (match) {
      lastIp = match[1]; 
    }
  }

  return lastIp;
}
