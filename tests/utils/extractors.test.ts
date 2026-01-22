import { describe, expect, it } from "vitest";

import { getEntityId } from "@/utils/extractors";

describe("getEntityId", () => {
  it("normalizes entity id to sensor.* form", () => {
    expect(getEntityId("uroven_zhidkosti_septika")).toBe("sensor.uroven_zhidkosti_septika");

    expect(getEntityId("sensor.uroven_zhidkosti_septika")).toBe("sensor.uroven_zhidkosti_septika");
  });
});
