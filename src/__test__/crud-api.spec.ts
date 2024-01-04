import test from "node:test";
import { strict as assert } from "node:assert";

import { makeRequest } from "./test-util";

const BASE_URL = "http://localhost:3000";
const request = makeRequest(BASE_URL);

test("fetch items", async () => {
  const response = await request("/item", {
    method: "get",
  });
  const items = response?.data?.items || [];
  const [firstItem] = items;

  assert.strictEqual(response.status, 200);
  assert.strictEqual(items.length, 1);
  assert.strictEqual(firstItem?.id, 1);
  assert.strictEqual(firstItem?.name, "item 1");
  assert.strictEqual(firstItem?.size, 12);
  assert.strictEqual(firstItem?.active, true);
  assert.strictEqual(firstItem?.meta?.material, "wood");
});

test("edit item", async () => {
  const response = await request("/item/1", {
    method: "put",
  });

  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.data.message, "item successfully updated");
});

test("delete item", async () => {
  const response = await request("/item/1", {
    method: "delete",
  });

  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.data.message, "item successfully deleted");
});
