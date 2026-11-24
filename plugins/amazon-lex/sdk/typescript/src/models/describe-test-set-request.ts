import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeTestSetRequest = {
  /** The test set Id for the test set request. */
  testSetId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTestSetRequestSchema: Schema<DescribeTestSetRequest> = s.object<DescribeTestSetRequest>(
  {
    testSetId: s.string(),
  },
  { additionalProperties: s.json() },
);
