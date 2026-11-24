import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchGetBuildBatchesInput = {
  /** An array that contains the batch build identifiers to retrieve. */
  ids: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetBuildBatchesInputSchema: Schema<BatchGetBuildBatchesInput> =
  s.object<BatchGetBuildBatchesInput>(
    {
      ids: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
