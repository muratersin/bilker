import test from "node:test";
import { strict as assert } from "node:assert";

const BASE_URL = "http://localhost:3000";
const request = (path: string, options: RequestInit | undefined) =>
  new Promise((resolve: (res: any) => void) => {
    fetch(`${BASE_URL}/${path}`, options)
      .then((res) => res.json())
      .then(resolve)
      .catch(resolve);
  });

test("fetch items", async () => {
  const response = await request("/item", {
    method: "get",
  });
  console.log(response);
  assert.strictEqual(response?.data?.length, 1);
});
