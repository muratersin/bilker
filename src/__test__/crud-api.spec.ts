import test from "node:test";
import { strict as assert } from "node:assert";

import { makeRequest } from "./test-util";

const BASE_URL = "http://localhost:3000";
const request = makeRequest(BASE_URL);
test("fetch items", async () => {
  const response = await request("/item", {
    method: "get",
  });
  console.log(response);
  assert.strictEqual(response?.data?.length, 1);
});
