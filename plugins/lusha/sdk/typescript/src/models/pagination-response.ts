import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaginationResponse = {
  total: number;
  limit?: number;
  offset?: number;
  hasMore: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationResponseSchema: Schema<PaginationResponse> = s.object<PaginationResponse>(
  {
    total: s.int(),
    limit: s.optional(s.int()),
    offset: s.optional(s.int()),
    hasMore: s.boolean(),
  },
  { additionalProperties: s.json() },
);
