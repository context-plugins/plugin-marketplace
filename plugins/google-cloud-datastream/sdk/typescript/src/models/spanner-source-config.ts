import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { spannerDatabase3Schema, type SpannerDatabase3 } from "./spanner-database3.js";
import { spannerDatabase4Schema, type SpannerDatabase4 } from "./spanner-database4.js";
import { spannerRpcPrioritySchema, type SpannerRpcPriority } from "./spanner-rpc-priority.js";

/** Configuration for syncing data from a Spanner source. */
export type SpannerSourceConfig = {
  /** Optional. The FGAC role to use for the stream. */
  fgacRole?: string;
  /**
   * Optional. The Spanner objects to retrieve from the data source. If some objects are both
   * included and excluded, an error will be thrown.
   */
  includeObjects?: SpannerDatabase3;
  /** Optional. Maximum number of concurrent CDC tasks. */
  maxConcurrentCdcTasks?: number;
  /** Optional. The RPC priority to use for the stream. */
  spannerRpcPriority?: SpannerRpcPriority;
  /** Optional. Whether to use Data Boost for Spanner backfills. Defaults to false if not set. */
  backfillDataBoostEnabled?: boolean;
  /** Required. Immutable. The change stream name to use for the stream. */
  changeStreamName?: string;
  /** Optional. Maximum number of concurrent backfill tasks. */
  maxConcurrentBackfillTasks?: number;
  /**
   * Optional. The Spanner objects to avoid retrieving. If some objects are both included and
   * excluded, an error will be thrown.
   */
  excludeObjects?: SpannerDatabase4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spannerSourceConfigSchema: Schema<SpannerSourceConfig> = s.object<SpannerSourceConfig>(
  {
    fgacRole: s.optional(s.string()),
    includeObjects: s.optional(s.lazy(() => spannerDatabase3Schema)),
    maxConcurrentCdcTasks: s.optional(s.int()),
    spannerRpcPriority: s.optional(s.lazy(() => spannerRpcPrioritySchema)),
    backfillDataBoostEnabled: s.optional(s.boolean()),
    changeStreamName: s.optional(s.string()),
    maxConcurrentBackfillTasks: s.optional(s.int()),
    excludeObjects: s.optional(s.lazy(() => spannerDatabase4Schema)),
  },
  { additionalProperties: s.json() },
);
