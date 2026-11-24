import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A collection of test cases grouped for execution */
export type TestSet = {
  /** Unique identifier of the test set */
  id?: string;
  /** Display name of the test set */
  name?: string;
  /** Optional description of the test set's purpose */
  description?: string;
  /** Number of test cases included in this test set */
  testCaseCount?: number;
  /** ISO 8601 timestamp when the test set was created */
  createdOn?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetSchema: Schema<TestSet> = s.object<TestSet>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    testCaseCount: s.optional(s.int()),
    createdOn: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
