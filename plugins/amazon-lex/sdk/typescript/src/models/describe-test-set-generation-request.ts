import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeTestSetGenerationRequest = {
  /** The unique identifier of the test set generation. */
  testSetGenerationId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTestSetGenerationRequestSchema: Schema<DescribeTestSetGenerationRequest> =
  s.object<DescribeTestSetGenerationRequest>(
    {
      testSetGenerationId: s.string(),
    },
    { additionalProperties: s.json() },
  );
