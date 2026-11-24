import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { item1Schema, type Item1 } from "./item1.js";

export type V1GrailedListingsResponse = {
  keyword?: string;
  page?: number;
  count?: number;
  marketplace?: string;
  totalListings?: number | null;
  totalItems?: number;
  hasNextPage?: boolean;
  scrapedAt?: string;
  summary?: Record<string, unknown> | null;
  items?: Item1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1GrailedListingsResponseSchema: Schema<V1GrailedListingsResponse> =
  s.object<V1GrailedListingsResponse>(
    {
      keyword: s.optional(s.string()),
      page: s.optional(s.int()),
      count: s.optional(s.int()),
      marketplace: s.optional(s.string()),
      totalListings: s.optionalNullable(s.int()),
      totalItems: s.optional(s.int()),
      hasNextPage: s.optional(s.boolean()),
      scrapedAt: s.optional(s.string()),
      summary: s.optionalNullable(s.record(s.string(), s.unknown())),
      items: s.optional(s.array(s.lazy(() => item1Schema))),
    },
    { additionalProperties: s.json() },
  );
