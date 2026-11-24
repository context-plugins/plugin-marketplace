import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeTestExecutionRequest = {
  /** The execution Id of the test set execution. */
  testExecutionId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTestExecutionRequestSchema: Schema<DescribeTestExecutionRequest> =
  s.object<DescribeTestExecutionRequest>(
    {
      testExecutionId: s.string(),
    },
    { additionalProperties: s.json() },
  );
