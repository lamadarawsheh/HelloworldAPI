import { Request } from "express";
import getRealClientIPAddress from "../src/client";

describe("getRealClientIPAddress", () => {
  it("should return the first IP from x-forwarded-for header", () => {
    const req = {
      headers: {
        "x-forwarded-for": "192.168.1.1",
      },
    } as unknown as Request;

    const ip = getRealClientIPAddress(req);
    expect(ip).toBe("192.168.1.1");
  });

  it("should return the IP from forwarded header", () => {
    const req = {
      headers: {
        forwarded: "for=192.168.1.2",
      },
    } as Request;

    const ip = getRealClientIPAddress(req);
    expect(ip).toBe("192.168.1.2");
  });

  it("should return the last IP from forwarded header", () => {
    const req = {
      headers: {
        forwarded: "for=10.0.0.1, for=192.168.1.3",
      },
    } as Request;

    const ip = getRealClientIPAddress(req);
    expect(ip).toBe("192.168.1.3");
  });

  it("should return the IP from req.ip if no headers are present", () => {
    const req = {
      ip: "172.16.0.1",
      headers: {},
    } as Request;

    const ip = getRealClientIPAddress(req);
    expect(ip).toBe("172.16.0.1");
  });

  it('should return "unknown" if no IP can be determined', () => {
    const req = {
      ip: undefined,
      headers: {},
    } as Request;

    const ip = getRealClientIPAddress(req);
    expect(ip).toBe("unknown");
  });
});
