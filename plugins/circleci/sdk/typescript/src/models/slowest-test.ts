import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SlowestTest = {
  /** Name of the test */
  testName?: string;
  /** Class name of the test */
  classname?: string;
  /** 95th percentile duration */
  p95Duration?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slowestTestSchema: Schema<SlowestTest> = s.object<SlowestTest>(
  {
    testName: s.optional(s.string()),
    classname: s.optional(s.string()),
    p95Duration: s.optional(s.float64()),
    _keysMap: {
      testName: "test_name",
      p95Duration: "p95_duration",
    },
  },
  { additionalProperties: s.json() },
);
