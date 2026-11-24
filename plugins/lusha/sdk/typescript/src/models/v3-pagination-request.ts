import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V3PaginationRequest = {
  /** @default 0 */
  page?: number;
  /** @default 25 */
  size?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3PaginationRequestProperties: s.Shape<V3PaginationRequest> = {
  page: s.defaulted(s.int(), 0),
  size: s.defaulted(s.int(), 25),
};

export const v3PaginationRequestInternalSchema: Schema<V3PaginationRequest> = s.object<V3PaginationRequest>(
  v3PaginationRequestProperties,
  { additionalProperties: s.json() },
);

export const v3PaginationRequestSchema: Schema<V3PaginationRequest> = s.lazySchema(() =>
  s.object<V3PaginationRequest>(
    {
      ...v3PaginationRequestProperties,
      page: s.defaulted(s.int().check(s.gte(0), s.lte(1000)), 0),
      size: s.defaulted(s.int().check(s.gte(10), s.lte(100)), 25),
    },
    { additionalProperties: s.json() },
  ),
);
