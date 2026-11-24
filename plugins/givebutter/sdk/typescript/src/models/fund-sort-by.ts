import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./value.js";

/** Fund sort order. One of `order_asc`, `name_asc`, `created_at_desc`. */
export type FundSortBy = {
  /** @default "fund_sort_by" */
  name?: "fund_sort_by";
  value?: Value | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundSortBySchema: Schema<FundSortBy> = s.object<FundSortBy>(
  {
    name: s.defaulted(s.literal("fund_sort_by"), "fund_sort_by"),
    value: s.optionalNullable(s.lazy(() => valueSchema)),
  },
  { additionalProperties: s.json() },
);
