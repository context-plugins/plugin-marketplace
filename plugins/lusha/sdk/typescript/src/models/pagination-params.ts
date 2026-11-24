import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaginationParams = {
  /** Page number (0-1000) @default 0 */
  page?: number;
  /** Page size (10-50) @default 20 */
  size?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paginationParamsProperties: s.Shape<PaginationParams> = {
  page: s.defaulted(s.float64(), 0),
  size: s.defaulted(s.float64(), 20),
};

export const paginationParamsInternalSchema: Schema<PaginationParams> = s.object<PaginationParams>(
  paginationParamsProperties,
  { additionalProperties: s.json() },
);

export const paginationParamsSchema: Schema<PaginationParams> = s.lazySchema(() =>
  s.object<PaginationParams>(
    {
      ...paginationParamsProperties,
      page: s.defaulted(s.float64().check(s.gte(0), s.lte(1000)), 0),
      size: s.defaulted(s.float64().check(s.gte(10), s.lte(50)), 20),
    },
    { additionalProperties: s.json() },
  ),
);
