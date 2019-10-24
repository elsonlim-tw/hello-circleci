const request = require("supertest");
const app = require("./app");

describe("Server", () => {
  it("/ GET should return Hello World", async () => {
    const response = await request(app).get("/");

    expect(response.text).toBe("Hello Elson!");
  });
});
