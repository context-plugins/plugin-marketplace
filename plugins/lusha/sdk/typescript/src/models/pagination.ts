import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. If omitted, defaults to page 0, size 100. */
export type Pagination = {
  /** @default 0 */
  page?: number;
  /** @default 100 */
  size?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paginationProperties: s.Shape<Pagination> = {
  page: s.defaulted(s.int(), 0),
  size: s.defaulted(s.int(), 100),
};

export const paginationInternalSchema: Schema<Pagination> = s.object<Pagination>(paginationProperties, {
  additionalProperties: s.json(),
});

export const paginationSchema: Schema<Pagination> = s.lazySchema(() =>
  s.object<Pagination>(
    {
      ...paginationProperties,
      page: s.defaulted(s.int().check(s.gte(0)), 0),
      size: s.defaulted(s.int().check(s.gte(10), s.lte(100)), 100),
    },
    { additionalProperties: s.json() },
  ),
);
