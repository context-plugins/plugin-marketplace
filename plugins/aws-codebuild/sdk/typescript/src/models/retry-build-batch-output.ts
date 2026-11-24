import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildBatchSchema, type BuildBatch } from "./build-batch.js";

export type RetryBuildBatchOutput = {
  buildBatch?: BuildBatch;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const retryBuildBatchOutputSchema: Schema<RetryBuildBatchOutput> = s.object<RetryBuildBatchOutput>(
  {
    buildBatch: s.optional(s.lazy(() => buildBatchSchema)),
  },
  { additionalProperties: s.json() },
);
