import test from "node:test";
import { strict as assert } from "node:assert";

import { makeRequest } from "./test-util";

const BASE_URL = "http://localhost:3000";
const request = makeRequest(BASE_URL);

test("fetch items", async () => {
  const response = await request("/item", {
    method: "get",
  });

  assert.strictEqual(response?.data?.items.length, 1);
  assert.strictEqual(response?.data?.items[0]?.id, 1);
  assert.strictEqual(response?.data?.items[0]?.name, "item 1");
  assert.strictEqual(response?.data?.items[0]?.size, 12);
  assert.strictEqual(response?.data?.items[0]?.active, true);
  assert.strictEqual(response?.data?.items[0]?.meta?.material, "wood");
});
