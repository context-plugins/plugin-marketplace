import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bulkStatusFailureSchema, type BulkStatusFailure } from "./bulk-status-failure.js";

/**
 * Non-atomic: partial successes commit.
 *
 * Per-input failures are surfaced individually instead of failing the whole batch. ``unchanged``
 * carries no-ops (target progress equals existing progress).
 */
export type BulkStatusResponse = {
  succeeded?: string[];
  unchanged?: string[];
  failures?: BulkStatusFailure[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkStatusResponseSchema: Schema<BulkStatusResponse> = s.object<BulkStatusResponse>(
  {
    succeeded: s.optional(s.array(s.string())),
    unchanged: s.optional(s.array(s.string())),
    failures: s.optional(s.array(s.lazy(() => bulkStatusFailureSchema))),
  },
  { additionalProperties: s.json() },
);
