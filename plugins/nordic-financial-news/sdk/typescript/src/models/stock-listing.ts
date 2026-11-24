import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exchange1Schema, type Exchange1 } from "./exchange1.js";

export type StockListing = {
  /** Full ticker including exchange suffix */
  ticker?: string;
  /** Whether this is the primary listing */
  primary?: boolean;
  exchange?: Exchange1 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stockListingSchema: Schema<StockListing> = s.object<StockListing>(
  {
    ticker: s.optional(s.string()),
    primary: s.optional(s.boolean()),
    exchange: s.optionalNullable(s.lazy(() => exchange1Schema)),
  },
  { additionalProperties: s.json() },
);
