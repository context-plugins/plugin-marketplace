import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TestWindowSummary = {
  /** The time at which the test began. */
  testWindowStart?: Date;
  /** The time at which the test ended. */
  testWindowEnd?: Date;
  /** The status of the test. Possible status values are: ACTIVE CREATE_IN_PROGRESS CREATE_FAILED */
  status?: string;
  /** If the test failed, the reason why it failed. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testWindowSummarySchema: Schema<TestWindowSummary> = s.object<TestWindowSummary>(
  {
    testWindowStart: s.optional(s.dateTime()),
    testWindowEnd: s.optional(s.dateTime()),
    status: s.optional(s.string()),
    message: s.optional(s.string()),
    _keysMap: {
      testWindowStart: "TestWindowStart",
      testWindowEnd: "TestWindowEnd",
      status: "Status",
      message: "Message",
    },
  },
  { additionalProperties: s.json() },
);
