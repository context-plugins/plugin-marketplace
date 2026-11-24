import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Pagination metadata for usage summaries */
export type UsagePaginationMeta = {
  /** The requested limit */
  limit: number;
  /** The requested offset */
  offset: number;
  /** Total number of usage summaries available */
  total: number;
  /** Whether there are more results available */
  hasMore: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usagePaginationMetaSchema: Schema<UsagePaginationMeta> = s.object<UsagePaginationMeta>(
  {
    limit: s.int(),
    offset: s.int(),
    total: s.int(),
    hasMore: s.boolean(),
  },
  { additionalProperties: s.json() },
);
