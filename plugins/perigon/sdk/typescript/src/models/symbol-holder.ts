import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SymbolHolder = {
  symbol?: string | null;
  exchange?: string | null;
  exchangeShortName?: string | null;
  ipoDate?: string | null;
  isin?: string | null;
  cusip?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const symbolHolderSchema: Schema<SymbolHolder> = s.object<SymbolHolder>(
  {
    symbol: s.optionalNullable(s.string()),
    exchange: s.optionalNullable(s.string()),
    exchangeShortName: s.optionalNullable(s.string()),
    ipoDate: s.optionalNullable(s.string()),
    isin: s.optionalNullable(s.string()),
    cusip: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
