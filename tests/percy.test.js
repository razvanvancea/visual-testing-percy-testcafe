import percySnapshot from "@percy/testcafe";

// prettier-ignore
fixture `visual testing demo`.page `https://qa-automation-practice.netlify.app`;

test("demo", async (t) => {
  await t.wait(1000);
  await percySnapshot(t, "homepage");
});
