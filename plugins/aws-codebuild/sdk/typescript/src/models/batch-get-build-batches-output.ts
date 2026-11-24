import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildBatchSchema, type BuildBatch } from "./build-batch.js";

export type BatchGetBuildBatchesOutput = {
  /** An array of BuildBatch objects that represent the retrieved batch builds. */
  buildBatches?: BuildBatch[];
  /** An array that contains the identifiers of any batch builds that are not found. */
  buildBatchesNotFound?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetBuildBatchesOutputSchema: Schema<BatchGetBuildBatchesOutput> =
  s.object<BatchGetBuildBatchesOutput>(
    {
      buildBatches: s.optional(s.array(s.lazy(() => buildBatchSchema))),
      buildBatchesNotFound: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
