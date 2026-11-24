import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/** Final state of the test, can be either complete or an error. */
export type TestStatus1 = {
  /** Error details if applicable. */
  details?: string;
  /** Status of the test. */
  status?: Status;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testStatus1Schema: Schema<TestStatus1> = s.object<TestStatus1>(
  {
    details: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
  },
  { additionalProperties: s.json() },
);
