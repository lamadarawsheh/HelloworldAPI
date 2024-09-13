import request from "supertest";
import app from "../src/index";

describe("API endpoints", () => {
  describe("GET /hello", () => {
    it.each([
      {
        expectedResult: "World!",
        description: "when no name is provided",
      },
      {
        expectedResult: "Max",
        description: "when a name is provided",
        name: "Max",
      },
    ])(
      `should return Hello, $expectedResult $description`,
      async ({ expectedResult, name }) => {
        const queryString = name ? `?name=${name}` : "";
        const response = await request(app).get(`/hello${queryString}`);
        expect(response.status).toBe(200);
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.body.greeting).toBe(`Hello, ${expectedResult}`);
      },
    );
  });

  describe("GET /info", () => {
    it("should return JSON with request_time, client_address, host_name, and headers", async () => {
      const response = await request(app).get("/info");

      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toMatch(/json/);

      const { request_time, client_address, host_name, headers } =
        response.body;

      expect(request_time).toBeDefined();
      expect(client_address).toBeDefined();
      expect(host_name).toBeDefined();
      expect(headers).toBeDefined();
      expect(client_address).not.toBe("unknown");
      expect(new Date(request_time).toISOString()).toBe(request_time);
    });
  });
});
