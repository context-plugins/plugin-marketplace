import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SectorMarketCapAmount = {
  /** Numeric value of the market capitalisation */
  value?: number;
  /** Unit of the market capitalisation value */
  unit?: string;
  /** Human-readable formatted market capitalisation */
  formatted?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectorMarketCapAmountSchema: Schema<SectorMarketCapAmount> = s.object<SectorMarketCapAmount>(
  {
    value: s.optional(s.float64()),
    unit: s.optional(s.string()),
    formatted: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
