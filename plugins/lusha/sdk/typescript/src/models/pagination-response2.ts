import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaginationResponse2 = {
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationResponse2Schema: Schema<PaginationResponse2> = s.object<PaginationResponse2>(
  {
    total: s.int(),
    limit: s.int(),
    offset: s.int(),
    hasMore: s.boolean(),
  },
  { additionalProperties: s.json() },
);
