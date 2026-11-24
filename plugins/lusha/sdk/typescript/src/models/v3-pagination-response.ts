import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V3PaginationResponse = {
  page?: number;
  size?: number;
  total?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3PaginationResponseSchema: Schema<V3PaginationResponse> = s.object<V3PaginationResponse>(
  {
    page: s.optional(s.int()),
    size: s.optional(s.int()),
    total: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
