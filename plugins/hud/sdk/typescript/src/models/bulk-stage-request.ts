import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Bulk lifecycle-stage move.
 *
 * Advance tasks one stage forward or send them back to an earlier stage of their taskset's
 * pipeline.
 */
export type BulkStageRequest = {
  ids: string[];
  stage: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bulkStageRequestProperties: s.Shape<BulkStageRequest> = {
  ids: s.array(s.string()),
  stage: s.string(),
};

export const bulkStageRequestInternalSchema: Schema<BulkStageRequest> = s.object<BulkStageRequest>(
  bulkStageRequestProperties,
  { additionalProperties: s.json() },
);

export const bulkStageRequestSchema: Schema<BulkStageRequest> = s.lazySchema(() =>
  s.object<BulkStageRequest>(
    {
      ...bulkStageRequestProperties,
      ids: s.array(s.string()).check(s.minLength(1), s.maxLength(500)),
    },
    { additionalProperties: s.json() },
  ),
);
