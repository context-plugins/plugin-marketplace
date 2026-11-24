import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Pagination metadata for cost traces */
export type PaginationMeta = {
  /** The requested limit */
  limit: number;
  /** The requested offset */
  offset: number;
  /** Number of items returned in this response */
  count: number;
  /** Whether there are more results available */
  hasMore: boolean;
  /** The startTime filter that was applied (if any) */
  startTime?: Date;
  /** The endTime filter that was applied (if any) */
  endTime?: Date;
  /** The externalCustomerId filter that was applied (if any) */
  externalCustomerId?: string;
  /** The externalProductId filter that was applied (if any) */
  externalProductId?: string;
  /**
   * DEPRECATED: Use externalProductId instead. The externalAgentId filter that was applied (if any)
   */
  externalAgentId?: string;
  /** The metadata filter that was applied (if any) */
  metadata?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationMetaSchema: Schema<PaginationMeta> = s.object<PaginationMeta>(
  {
    limit: s.int(),
    offset: s.int(),
    count: s.int(),
    hasMore: s.boolean(),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    externalCustomerId: s.optional(s.string()),
    externalProductId: s.optional(s.string()),
    externalAgentId: s.optional(s.string()),
    metadata: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
